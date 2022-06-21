import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "fetchusers",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;

      // Redux function. [2,1] Delete 2nd index item, and only 1 item. 
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //Add
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});



export const {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  updateUsersStart,
  updateUsersSuccess,
  updateUsersFailure,
  addUserFailure,
  addUserSuccess,
  addUserStart
} = userSlice.actions;

export default userSlice.reducer;