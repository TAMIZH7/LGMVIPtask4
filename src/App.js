import React,{ useState } from "react";
import "./styles.css";

export default function App(){
  const[users,setUsers]=useState([]);

  const loadUser =async () => { 
    const responce= await fetch("https://reqres.in/api/users?page=1");
    const jsonResponce= await responce.json();
    setUsers(jsonResponce.data);
  };

  return (
    <div>
       <div className="header">
           <h1 className="head-title">Task-2</h1>
           <button className="head-btn" onClick={loadUser}>
             Get users
           </button>
        <div>
       <div className="user-space">
          {users.map(({ id, email, first_name, last_name, avatar }) => (
           <div className="card" style={{width:"12rem" }}>
             <div className="main">
               <img className="card-img-top" src={avatar} alt="card image top">
                 <div className="card-body">
                   <h5 className="card-id" key={id}>
                     Id={id}
                   </h5>
                   <h5
                      className="card-title"
                      key={id}>
                      {`${first_name} ${last_name}`}
                    </h5>
                    <p className="card-text" key={id}>
                      {email}
                    </p>
                 </div>
              </div>
          </div>
       ))}
      </div>
    </div>
   );
}
