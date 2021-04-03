
const setIPAddress = ({ commit }, payload) => {
  commit('CAPTURE_USER_IP', payload);
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

  const LOC_GEO = `${lat}|${lng}`;

  commit('CAPTURE_USER_ISP', isp);
  commit('CAPTURE_USER_CITY', city);
  commit('CAPTURE_USER_REGION', region);
  commit('CAPTURE_USER_LATLNG', LOC_GEO);
  commit('CAPTURE_USER_TIMEZONE', timezone);
};

const setUserPosition = ({ commit }, payload) => {
  commit('CAPTURE_USER_LATLNG', payload);
};

export default {
  setIPAddress,
  captureUserInfo,
  setUserPosition
}
