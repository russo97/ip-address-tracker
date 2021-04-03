
const captureUserIP = async ({ commit }) => {
  const URL_FETCH = import.meta.env.VITE_GEO_PLUGIN;

  const ipinfo = await ( await fetch(URL_FETCH) ).json();

  commit('CAPTURE_USER_IP', await ipinfo.geoplugin_request);
};

const captureUserInfo = async ({ commit, state }) => {
  const { VITE_IPIFY_URL, VITE_API_KEY } = import.meta.env;

  const IPIFY_INFO = await ( await fetch(`${VITE_IPIFY_URL}apiKey=${VITE_API_KEY}&ipAddress=${state.userIP}`) ).json();

  const {
    isp,
    location: {
      lng,
      lat,
      city,
      region,
      timezone
    }
  } = await IPIFY_INFO;

  commit('CAPTURE_USER_TIMEZONE', timezone);
};

export default {
  captureUserIP,
  captureUserInfo
}
