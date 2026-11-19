/* Partner list supplied by the client; updated 16 November 2026.
   Countries indicate the partner's base, not the destinations it sells.
   Names and brand aliases are never translated. Indus Travel Argentina's exact
   URL, including its language query, was supplied by the client.
   Each market: {id:ISO3,country,region,center:[lng,lat],agencies:[{name,url,description?}]}.
   Localised descriptions use agency.translations[locale].description. */
window.AYSEN_NETWORK_DATA = {
  demoMode: false,
  confirmedMarkets: [
    {
      id: 'CHL',
      country: 'Chile',
      region: 'Sudamérica',
      center: [-71, -33],
      agencies: [
        {name: 'Pacific Reps', url: 'https://www.pacificreps.com/'},
        {name: 'Expan Tours', url: 'https://expan.cl/'},
        {name: 'Travelaway', url: 'https://travelaway.cl/'},
        {name: 'Panam', url: 'https://www.panam.cl/'},
        {name: 'GoChile', url: 'https://www.gochile.cl/'},
        {name: 'OTSI', url: 'https://otsi.cl/'},
        {name: 'CTS Turismo', description: 'Chilean Travel Services', url: 'https://www.ctsturismo.com/'}
      ]
    },
    {
      id: 'ARG',
      country: 'Argentina',
      region: 'Sudamérica',
      center: [-65, -35],
      agencies: [
        {name: 'Indus Travel', url: 'http://industravel.tur.ar/?lang=es'},
        {name: 'Quarum Travel', description: 'Quarum Experience', url: 'https://quarumexperience.com.ar/'}
      ]
    },
    {
      id: 'BRA',
      country: 'Brasil',
      region: 'Sudamérica',
      center: [-52, -16],
      agencies: [
        {name: 'Grupo BRT', url: 'https://grupobrt.com.br/'}
      ]
    }
  ],
  // Unresolved identities stay out of the published partner list.
  pendingAgencies: [
    {
      name: 'Logistour',
      candidateName: 'Logistur',
      candidateUrl: 'https://www.logistur.com.br/',
      reason: 'Confirm that Logistour refers to Logistur and which office/market to display.'
    }
  ],
  demoMarkets: []
};
