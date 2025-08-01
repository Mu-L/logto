import type { CustomProfileField, UserProfile } from '@logto/schemas';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as s from 'superstruct';

import PrimitiveProfileInputField from '@/components/InputFields/PrimitiveProfileInputField';
import { addressFieldConfigGuard } from '@/types/guard';

import useValidateField from '../use-validate-field';

import styles from './index.module.scss';

type AddressSubFormType = Pick<UserProfile, 'address'>;

type Props = {
  readonly field: CustomProfileField;
};

/**
 * The address data structure in profile is as follows:
 *
 * ```
 * address: {
 *   streetAddress?: string;
 *   locality?: string;
 *   region?: string;
 *   postalCode?: string;
 *   country?: string;
 *   formatted?: string;
 * }
 * ```
 *
 * The `formatted` field can be configured in the `config.parts` and rendered as an input,
 * or be computed from the other fields and stay invisible if not specified.
 */
const AddressSubForm = ({ field }: Props) => {
  const { t } = useTranslation();
  const validateField = useValidateField();

  const {
    control,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useFormContext<AddressSubFormType>();

  const { description, config, required } = field;

  const enabledParts = useMemo(() => {
    s.assert(config, addressFieldConfigGuard);
    return config.parts.filter(({ enabled }) => enabled);
  }, [config]);

  const values = watch('address');

  const setFormattedValue = useCallback(() => {
    const formatted = enabledParts
      .map(({ name }) => values?.[name])
      .filter(Boolean)
      .join(', ');
    setValue('address.formatted', formatted);
  }, [enabledParts, setValue, values]);

  if (enabledParts.length === 0) {
    return null;
  }

  return (
    <div className={styles.addressContainer}>
      {enabledParts.map((part) => (
        <Controller
          key={part.name}
          name={`address.${part.name}`}
          control={control}
          rules={{ required, validate: (value) => validateField(value, part) }}
          render={({ field: { onBlur, onChange, value } }) => (
            <PrimitiveProfileInputField
              {...part}
              className={classNames(
                styles.inputField,
                (part.name === 'locality' || part.name === 'region') && styles.halfSize
              )}
              label={part.label ?? t(`profile.address.${part.name}`)}
              value={value ?? ''}
              isDanger={!!errors.address?.[part.name]}
              onBlur={onBlur}
              onChange={(event) => {
                onChange(event);
                if (part.name !== 'formatted') {
                  setFormattedValue();
                }
              }}
            />
          )}
        />
      ))}
      {!enabledParts.some(({ name }) => name === 'formatted') && (
        <input {...register('address.formatted')} hidden />
      )}
      {description && <div className={styles.description}>{description}</div>}
      {errors.address && (
        <div className={styles.errorMessage}>
          {t('error.general_required', { types: [t('profile.address.formatted')] })}
        </div>
      )}
    </div>
  );
};

export default AddressSubForm;
