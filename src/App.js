import { useState } from "react";
import "./App.css";
import HomeDashboard from "./layouts/HomeDashboard";
import AuthDashboard from "./layouts/AuthDashboard";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="App">
      {isAuth === true ? <HomeDashboard /> : <AuthDashboard />}
    </div>
  );
}

export default App;
