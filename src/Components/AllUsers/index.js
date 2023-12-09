import {useEffect, useState} from "react";
import {findAllUsers} from "../../Clients/userclient";
import {Link} from "react-router-dom";


export default function AllUsers(){
  const [users, setUsers] = useState([]);

  const getAllUsers = async ()=>{
    const response = await findAllUsers();
    setUsers(response);
  }

  useEffect(()=>{getAllUsers()}, []);
  return(
      <div className={""}>
        <h1 className={"d-flex justify-content-center"}>All Users</h1>
        {
            users.length !== 0 && (
                             <div className={"d-flex justify-content-center"}>
                               <div className={" "}>
                                 {users.map((user)=>{
                                   return (
                                       <Link key={user.username} to={`/profile/${user._id}`}
                                             className={"text-decoration-none form-control "
                                                        + "p-0 justify-content-center d-flex m-2"
                                                        + " align-items-center"}>
                                         <p className={"m-0 p-2"}>{user.nickname}
                                           @{user.username}</p>
                                       </Link>)
                                 })}
                               </div>
                             </div>
                         )
        }
      </div>



  );
};