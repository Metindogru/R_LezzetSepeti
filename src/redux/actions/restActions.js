import axios from "axios";
import actionTypes from "../actionTypes";

//* Normal Redux Aksiyonu
export const setRestaurants = async (payload) => {
  return {
    type: actionTypes.REST_SUCCESS,
    payload,
  };
};

//* Redux Thunk - Asenkron Aksiyon
//* Fonksiyon içerisinde fonksiyon return ederiz
export const getRestaurants = () => {
  return (dispatch) => {
    //* Asenkron işlemler yapabilir
    //* Dispatch ile reducer'a haber gönderebilir
    dispatch({ type: actionTypes.REST_LOADING });

    axios
      .get("http://localhost:3000/restaurants")
      .then((res) =>
        dispatch({
          type: actionTypes.REST_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => dispatch({ type: actionTypes.REST_ERROR, payload: err }));
  };
};
