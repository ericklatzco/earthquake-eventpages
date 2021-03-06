export const environment = {
  production: true,
  scenario: true,

  CONTRIBUTOR_SERVICE: '/data/comcat/contributor/index.json.php',

  DELETED_EVENT_SERVICE: '/fdsnws/event/1/query.geojson?includedeleted=true',

  EVENT_SERVICE: '/fdsnws/scenario/1/query?format=geojson&eventid={eventid}',

  GEOSERVE_SERVICE: '/ws/geoserve',

  SCENARIO_SERVICE: '/scenarios/feed/v1.0/detail/{eventid}.geojson',

  DYFI_RESPONSE_URL: '/data/dyfi/form/response.php',

  siteUrl: 'earthquake.usgs.gov'
};
