export const set_currencies = ( { commit }, payload ) => (
  commit('SET_CURRENCIES', payload),
  commit('SET_DEFAULT_CURRENCY', payload)
);
