
const captureUserIP = async ({ commit }) => {
  const URL_FETCH = import.meta.env.VITE_GEO_PLUGIN;

  const ipinfo = await ( await fetch(URL_FETCH) ).json();

  commit('CAPTURE_USER_IP', await ipinfo.geoplugin_request);
};

export default {
  captureUserIP
}
