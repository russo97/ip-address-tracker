
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

export default {
  timezone,
  location
}
