
const captureUserIP = async ({ commit }) => {
  const ipinfo = await ( await fetch('http://www.geoplugin.net/json.gp') ).json();

  commit('CAPTURE_USER_IP', await ipinfo.geoplugin_request);
};

export default {
  captureUserIP
}
