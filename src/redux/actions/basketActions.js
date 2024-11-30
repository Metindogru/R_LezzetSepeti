import api from "../../utils/api";
import ActionTypes from "../actionTypes";
import actionTypes from "../actionTypes";
import { v4 } from "uuid";

//* Asenkron Thunk Aksiyonu

//* Sepet verilerini api'dan alıp reducer'a dispatch ile haber göndericek
export const getCart = () => (dispatch) => {
  dispatch({ type: actionTypes.CART_LOADING });

  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: actionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: actionTypes.CART_ERROR, payload: err }));
};

//*Ürünü API'a kaydettikten sonra Reducer'a ekleneceğini bildir
export const createItem = (item) => (dispatch) => {
  console.log(item);

  //*Sepete eklenecek olan ürünün bilgilerini belirle

  const newItem = {
    id: v4(),
    productId: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    photo: item.photo,
    amount: 1,
  };

  //*APİ'a sepete eklemek için istek at
  api
    .post("/cart", newItem)

    //*İstek başarılı olursa reducer'a haber ver
    .then(() => dispatch({ type: ActionTypes.CREATE_ITEM, payload: newItem }));
};

//*Ürünün API'da ki miktarını güncelledikten sonra Reducar'a güncellendiğinin haberini gönder

export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })

    //*İstek başarılı olursa Reducer'a bilgi gönder
    .then((res) =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data })
    );
};

//*Ürünü API'dan silip Reducer'a kaldırması için haber gönderme

export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: ActionTypes.DELETE_ITEM, payload: id }));
};
