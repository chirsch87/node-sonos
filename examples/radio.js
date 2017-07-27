const {Sonos} = require('../');

const sonos = new Sonos(process.env.SONOS_HOST || '192.168.1.19', process.env.SONOS_PORT || 1400);

sonos.getFavoritesRadioStations({}, (err, data) => {
  console.log(err, data);
});

sonos.getFavoritesRadioShows({}, (err, data) => {
  console.log(err, data);
});
