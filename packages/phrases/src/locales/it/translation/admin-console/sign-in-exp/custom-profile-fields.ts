const custom_profile_fields = {
  table: {
    add_button: 'Aggiungi campo profilo',
    title: {
      field_label: 'Etichetta campo',
      type: 'Tipo',
      user_data_key: 'Chiave nel profilo utente',
    },
    placeholder: {
      title: 'Raccogli profilo utente',
      description:
        'Personalizza i campi per raccogliere più informazioni sul profilo utente durante la registrazione.',
    },
  },
  type: {
    Text: 'Testo',
    Number: 'Numero',
    Date: 'Data',
    Checkbox: 'Casella di controllo (Booleano)',
    Select: 'Menu a discesa (Selezione singola)',
    Url: 'URL',
    Regex: 'Espressione regolare',
    Address: 'Indirizzo (Composizione)',
    Fullname: 'Nome completo (Composizione)',
  },
  modal: {
    title: 'Aggiungi campo profilo',
    subtitle:
      'Personalizza i campi per raccogliere più informazioni sul profilo utente durante la registrazione.',
    built_in_properties: 'Proprietà integrate del profilo utente',
    custom_properties: 'Proprietà personalizzate',
    custom_data_field_name: 'Nome campo dati personalizzato',
    custom_data_field_input_placeholder:
      'Inserisci il nome del campo dati personalizzato, es. `mioCampoPreferito`',
    custom_field: {
      title: 'Campo dati personalizzato',
      description:
        "Qualsiasi proprietà aggiuntiva dell'utente che puoi definire per soddisfare i requisiti unici della tua applicazione.",
    },
    type_required: 'Seleziona un tipo di proprietà',
    create_button: 'Crea campo profilo',
  },
  details: {
    page_title: 'Dettagli campo profilo',
    back_to_sie: "Torna all'esperienza di accesso",
    enter_field_name: 'Inserisci il nome del campo profilo',
    delete_description:
      'Questa azione non può essere annullata. Sei sicuro di voler eliminare questo campo profilo?',
    field_deleted: 'Il campo profilo {{name}} è stato eliminato con successo.',
    key: 'Chiave dati utente',
    field_name: 'Nome campo',
    field_type: 'Tipo campo',
    settings: 'Impostazioni',
    settings_description:
      'Personalizza i campi per raccogliere più informazioni sul profilo utente durante la registrazione.',
    address_format: 'Formato indirizzo',
    single_line_address: 'Indirizzo su una riga',
    multi_line_address: 'Indirizzo su più righe (Es. Via, Città, Stato, CAP, Paese)',
    composition_parts: 'Parti di composizione',
    composition_parts_tip: 'Seleziona le parti per comporre il campo complesso.',
    label: 'Etichetta visualizzata',
    label_placeholder: 'Etichetta',
    label_tip:
      'Hai bisogno di localizzazione? Aggiungi lingue in <a>Esperienza di accesso > Contenuto</a>',
    placeholder: 'Segnaposto visualizzato',
    placeholder_placeholder: 'Segnaposto',
    description: 'Descrizione visualizzata',
    description_placeholder: 'Descrizione',
    options: 'Opzioni',
    options_tip:
      'Inserisci ogni opzione su una nuova riga. Usa il punto e virgola per separare chiave e valore, es. `chiave:valore`',
    options_placeholder: 'valore1:etichetta1\nvalore2:etichetta2\nvalore3:etichetta3',
    regex: 'Espressione regolare',
    regex_tip: "Definisci un'espressione regolare per validare l'input.",
    regex_placeholder: '^[a-zA-Z0-9]+$',
    date_format: 'Formato data',
    date_format_us: 'Stati Uniti (MM/dd/yyyy)',
    date_format_uk: 'Regno Unito e Europa (dd/MM/yyyy)',
    date_format_iso: 'Standard internazionale (yyyy-MM-dd)',
    custom_date_format: 'Formato data personalizzato',
    custom_date_format_placeholder: 'Inserisci il formato data personalizzato. Es. "MM-dd-yyyy"',
    custom_date_format_tip:
      'Consulta la documentazione di <a>date-fns</a> per i token di formattazione validi.',
    input_length: 'Lunghezza input',
    value_range: 'Intervallo valori',
    min: 'Minimo',
    max: 'Massimo',
    required: 'Obbligatorio',
    required_description:
      'Se abilitato, questo campo deve essere compilato dagli utenti. Se disabilitato, questo campo è opzionale.',
  },
};

export default Object.freeze(custom_profile_fields);
