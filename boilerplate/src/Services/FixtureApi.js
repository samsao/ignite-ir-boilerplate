/* eslint-disable global-require */
export default {
  // Functions return fixtures
  getRoot: () => ({
    ok: true,
    data: require('@mobile/Fixtures/root.json'),
  }),
  getRate: () => ({
    ok: true,
    data: require('@mobile/Fixtures/rateLimit.json'),
  }),
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('@mobile/Fixtures/gantman.json');
    const skellockData = require('@mobile/Fixtures/skellock.json');
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData,
    };
  },
};
