import { useState } from "react";
import { Login } from "../../components/Login/Login";
import { Logout } from "../../components/Logout/Logout";
import styles from "./LoginPage.module.scss";


export const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("User logged in");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.container}>
  {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Logout onLogout={handleLogout} />}
</div>

  );
};
