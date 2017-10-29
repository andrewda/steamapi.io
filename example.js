const SteamAPI = require('./');
const api = new SteamAPI(process.env.STEAMAPI_IO_KEY);

setImmediate(async () => {
  const response = await api.getPrices(730);
  console.log(Object.keys(response).length);
  // or:
  //
  // api.getPrices(730)
  //   .then((response) => {
  //     console.log(Object.keys(response).length)
  //   });
});
