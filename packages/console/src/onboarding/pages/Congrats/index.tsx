import { AppearanceMode } from '@logto/schemas';
import classNames from 'classnames';
import { useContext } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import CalendarOutline from '@/assets/images/calendar-outline.svg';
import CongratsImageDark from '@/assets/images/congrats-dark.svg';
import CongratsImageLight from '@/assets/images/congrats.svg';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import OverlayScrollbar from '@/components/OverlayScrollbar';
import { TenantsContext } from '@/contexts/TenantsProvider';
import { useTheme } from '@/hooks/use-theme';
import Reservation from '@/onboarding/components/Reservation';
import useUserOnboardingData from '@/onboarding/hooks/use-user-onboarding-data';
import * as pageLayout from '@/onboarding/scss/layout.module.scss';

import * as styles from './index.module.scss';

const Congrats = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const theme = useTheme();
  const CongratsImage = theme === AppearanceMode.LightMode ? CongratsImageLight : CongratsImageDark;
  const { update } = useUserOnboardingData();
  const { navigate, currentTenantId } = useContext(TenantsContext);

  const enterAdminConsole = () => {
    void update({ isOnboardingDone: true });
    // Note: navigate to the admin console page directly instead of using the router
    navigate(currentTenantId, { replace: true });
  };

  return (
    <div className={pageLayout.page}>
      <OverlayScrollbar className={pageLayout.contentContainer}>
        <div className={classNames(pageLayout.content, styles.content)}>
          <CongratsImage className={styles.congratsImage} />
          <div className={styles.title}>{t('cloud.congrats.title')}</div>
          <div className={styles.description}>
            <Trans components={{ strong: <span className={styles.strong} /> }}>
              {t('cloud.congrats.description')}
            </Trans>
          </div>
          <Reservation
            title="cloud.congrats.reserve_title"
            description="cloud.congrats.reserve_description"
            reservationButtonTitle="cloud.congrats.book_button"
            reservationButtonIcon={<CalendarOutline />}
            className={styles.reservation}
          />
          <Divider className={styles.divider} />
          <Button
            size="large"
            type="primary"
            title="cloud.congrats.enter_admin_console"
            onClick={enterAdminConsole}
          />
        </div>
      </OverlayScrollbar>
    </div>
  );
};

export default Congrats;