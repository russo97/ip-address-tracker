
const CAPTURE_USER_IP = (state, payload) => {
  state.userIP = payload;
};

const CAPTURE_USER_TIMEZONE = (state, payload) => {
  state.timezone = payload;
};

export default {
  CAPTURE_USER_IP,
  CAPTURE_USER_TIMEZONE
}
