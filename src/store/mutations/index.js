
const CAPTURE_USER_IP = (state, payload) => {
  state.userIP = payload;
};

const CAPTURE_USER_ISP = (state, payload) => {
  state.ISP = payload;
};

const CAPTURE_USER_CITY = (state, payload) => {
  state.city = payload;
};

const CAPTURE_USER_REGION = (state, payload) => {
  state.region = payload;
};

const CAPTURE_USER_TIMEZONE = (state, payload) => {
  state.timezone = payload;
};

const CAPTURE_USER_LATLNG = (state, payload) => {
  state.loc_geo = payload;
};

export default {
  CAPTURE_USER_IP,
  CAPTURE_USER_ISP,
  CAPTURE_USER_CITY,
  CAPTURE_USER_REGION,
  CAPTURE_USER_LATLNG,
  CAPTURE_USER_TIMEZONE
}
