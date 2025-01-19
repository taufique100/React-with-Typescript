import React, { useContext, useState } from "react";
import { AuthUser, UserContext } from "../Context/UserContext";

// type AuthUser = {
//   name: string;
//   email: string;
// };

export default function Auth() {
  const [loggedin, setLoggedIn] = useState(false);
//   const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // second option
  const userContext = useContext(UserContext)

  const handleLogin = () => {
    setLoggedIn(true);
    setUser({
        name: 'Taufique Ali',
        email:'taufique@ali.com'
    })

    if(userContext){
        userContext.setUser({
            name: 'Taufique Ali',
            email:'taufique@ali.com'
        })
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setUser({} as AuthUser)
    userContext?.setUser({} as AuthUser)
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>user is {loggedin ? "loggedin" : "LoggedOut"}</p>
      <div>
        <p>User name:  {user.name} | {userContext?.user?.name}</p>
        <p>User email: {user.email} | {userContext?.user?.email} </p>
      </div>
    </div>
  );
}
