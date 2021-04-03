
const timezone = state => {
  return state.timezone
    ? `UTC ${state.timezone}`
    : '-';
};

const location = state => {
  return state.city && state.region
    ? `${state.city}, ${state.region}`
    : '-';
};

const geolocation = state => {
  return state.loc_geo.length
    ? state.loc_geo.split('|').map(Number)
    : [];
};

export default {
  timezone,
  location,
  geolocation
}
