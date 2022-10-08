import { useEffect, useState } from "react";
import "./App.css";
import HomeDashboard from "./layouts/HomeDashboard";
import AuthDashboard from "./layouts/AuthDashboard";
import AuthService from "./service/AuthService";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  // useEffect(() => {
  //   AuthService.isSessionExist("/isSessionExist", (res) => {
  //     if (res.data) {
  //       console.log("sesion is exist");
  //       setIsAuth(true);
  //     } else {
  //       console.log("sesion is no exist");
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      {isAuth === true ? <HomeDashboard /> : <AuthDashboard />}
    </div>
  );
}

export default App;
