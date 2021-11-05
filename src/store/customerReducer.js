const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
export const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
export const ASYNC_ADD_MANY_CUSTOMERS = "ASYNC_ADD_MANY_CUSTOMERS";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter((cust) => cust.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const addManyCustomersAction = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});
export const asyncAddManyCustomersAction = (payload) => ({
  type: ASYNC_ADD_MANY_CUSTOMERS,
  payload,
});
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMERS,
  payload,
});
