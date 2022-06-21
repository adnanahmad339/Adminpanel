import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../Service/api";

import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  addUserFailure,
  addUserSuccess,
  addUserStart,
  updateUsersStart,
  updateUsersSuccess,
  updateUsersFailure,

} from "./GetUser"




export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  
  } catch (err) {
    dispatch(loginFailure());
  }
};


// GET PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

// DELETE PRODUCT

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
    alert("Product Deleted Successfully");
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// UPDATE PRODUCT
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`);

    dispatch(updateProductSuccess({ id, product }));
    alert("Product Updated Successfully");
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// ADD PRODUCT
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
    alert("Product Added Successfully");
  } catch (err) {
    dispatch(addProductFailure());
  }
};



// --------------------------Users--------------------------------------//
// GET USERS
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

// DELETE USERS
export const deleteUsers = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};



// ADD USERS
export const addUsers = async (getUser, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/users`, getUser);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
}
//UPDATE USER
export const updateUsers = async (id, getuser, dispatch) => {
  dispatch(updateUsersStart());
  try {
    dispatch(updateUsersSuccess({ id, getuser }));
  } catch (err) {
    dispatch(updateUsersFailure());
  }
};