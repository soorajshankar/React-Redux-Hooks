import { AUTHUSER, LOGOUT, REGISTER, SOFTREGISTER } from "./actionTypes";

/**
 *
 *
 * @export
 * @param {string} username username
 * @param {string} email email string
 * @param {string} password password string
 * @returns
 */
export function setAuthUser({ username, email, password }) {
  return {
    type: AUTHUSER,
    payload: {
      username,
      email,
      password: window.btoa(password),
      timestamp: new Date()
    }
  };
}
export function registerUser(payload) {
  return {
    type: REGISTER,
    payload
  };
}
export function softRegister({ username, email, password }) {
  return {
    type: SOFTREGISTER,
    payload: {
      username,
      email,
      password: window.btoa(password),
      timestamp: new Date()
    }
  };
}

export function setLogout() {
  return {
    type: LOGOUT
  };
}
