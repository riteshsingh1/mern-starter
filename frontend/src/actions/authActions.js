import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
//register

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
