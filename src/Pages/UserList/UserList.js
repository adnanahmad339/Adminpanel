import "./UserList.css"
import { Link } from "react-router-dom"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteUsers, getUsers } from "../../Redux/apiCalls";

const UserList = () => {




  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.fetchusers.users);



  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);


  // Taking id from below
  const handleDelete = (id) => {
    deleteUsers(id, dispatch)
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 180 },
    { field: 'username', headerName: 'username', width: 130 },
    { field: 'email', headerName: 'Email', width: 210 },
    {
      field: 'isAdmin',
      headerName: 'Role',
      type: 'boolean',
      width: 50,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',

      width: 130,

    },
    {
      field: 'action',
      headerName: 'Action',

      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className='userListEdit'>Edit</button>
            </Link>

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />

          </>

        )
      }

    },
  ];




  return (
    <div className="userList" style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={usersData}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}
      />

    </div>

  );


}

export default UserList;
