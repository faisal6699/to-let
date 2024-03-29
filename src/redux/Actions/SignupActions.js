import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
  } from "../Constants";
  import axios from 'axios'
  import { BASE_API_URL } from "../../Components/configs";

  const signupAction = (data) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST, payload: { data } });
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_API_URL}/api/users`,
        data: JSON.stringify(data),
        headers: {
          "Content-Type": `application/json`,
          // Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.data) {
        dispatch({ type: SIGNUP_SUCCESS, payload: { response } });
      }
    } catch (error) {
      dispatch({ type: SIGNUP_FAILED, payload: error.message });
    }
  };

  export {signupAction}