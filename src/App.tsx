import "./App.css";

import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import GlobalStyle from "./global";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("investors");
  }, [navigate]);

  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
