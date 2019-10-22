import { AUTHUSER, LOGOUT, SOFTREGISTER, REGISTER } from "./actionTypes";
import { storeItem, getStoredItem } from "../localStorage/storageHelpers";

const initialState = {
  authUser: null,
  error: null,
  softUser: {},
  allUsers: {}
};

/**
 * # Reducer
 *
 * @param {typeof initialState} [state=initialState]
 * @param {action} action redux action
 * @returns
 */
function addReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHUSER: {
      const allUsers = getStoredItem("allUsers") || {};
      const isValid =
        allUsers &&
        allUsers[action.payload.username] &&
        allUsers[action.payload.username].password === action.payload.password;
      return {
        ...state,
        authUser: isValid ? action.payload : null,
        error: isValid ? null : "Invalid Credentials",
        allUsers: isValid
          ? {
              ...state.allUsers,
              [action.payload.username]: allUsers[action.payload.username]
            }
          : { ...state.allUsers }
      };
    }
    case SOFTREGISTER: {
      return {
        ...state,
        error: null,
        softUser: action.payload
      };
    }
    case REGISTER: {
      const allUsers = {
        ...state.allUsers,
        [action.payload.username]: action.payload
      };
      storeItem("allUsers", allUsers);
      return {
        ...state,
        softUser: {},
        error: null,
        allUsers,
        authUser: action.payload
      };
    }
    case LOGOUT: {
      return { ...state, authUser: null };
    }
    default:
      return state;
  }
}

export default addReducer;
