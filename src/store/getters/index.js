
const timezone = state => {
  return `UTC ${state.timezone}`;
};

const location = state => {
  return `${state.city}, ${state.region}`;
};

export default {
  timezone,
  location
}
