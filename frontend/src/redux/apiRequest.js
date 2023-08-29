import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/v1/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed(err.response));
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("/v1/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed());
  }
};

export const refreshuser = async (user, dispatch, navigate) => {
  try {
    const res = await axios.post("/v1/user/refresh",user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailed(err.response));
  }
};

export const changepriceaa = async (user) => {
  try {
    const res = await axios.post("/v1/admin/changeprice",user);
  } catch (err) {
  }
};
export const changediscount = async (user) => {
  try {
    const res = await axios.post("/v1/admin/changediscount",user);
  } catch (err) {
  }
};

export const adminaddbook = async (user) => {
  try {
    const res = await axios.post("/v1/admin/addbookadmin",user);
  } catch (err) {
  }
};

// export const logout = async (dispatch, navigate) => {
//   dispatch(registerStart());
//   try {
//     await axios.post("/v1/auth/register", user);
//     dispatch(registerSuccess());
//     navigate("/login");
//   } catch (err) {
//     dispatch(registerFailed());
//   }
// };
