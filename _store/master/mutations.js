export const SET_CURRENCIES = ( state, payload ) => (
  state.currencies = payload
);

export const SET_DEFAULT_CURRENCY = ( state, payload ) => (
  state.defaultCurrency = payload.find( currency => currency.defaultCurrency)
);
