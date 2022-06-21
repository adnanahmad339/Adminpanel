import React, { useState } from 'react';
import "./NewUser.css"
import { addUsers } from "../../Redux/apiCalls";
import { useDispatch } from "react-redux";



const NewUser = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  console.log(inputs);
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }



  const handleClick = () => {

    const user = { ...inputs }
    addUsers(user, dispatch)

  }

  return (<>
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" name="username" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" name="fullname" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" name="email" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" name="password" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" name="phone" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" name="address" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender" >
            <input type="radio" name="gender" id="male" value="male" onChange={handleChange} />
            <label for="male" name="gender" >Male</label>
            <input type="radio" name="gender" id="female" value="female" onChange={handleChange} />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" onChange={handleChange} />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active" onChange={handleChange} >
            <option value="yes" onChange={handleChange} >Yes</option>
            <option value="no" onChange={handleChange} >No</option>
          </select>
        </div>
        <button className="newUserButton" onClick={(e) => handleClick(e.preventDefault())}>Create</button>
      </form>
    </div>

  </>);
}

export default NewUser;