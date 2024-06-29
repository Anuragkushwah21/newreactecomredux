import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../Constant/CategoryConstant";
import axios from "axios";

export const getCategory = () => async (dispatch) => {
  try {
    let link = "https://api-ecommerce-9fwj.onrender.com/api/getAllCategory";
    const { data } = await axios.get(link);
    console.log(data);

    dispatch({
      type: ALL_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORY_FAIL,
      payload: error.respond.data.message,
    });
  }
};
