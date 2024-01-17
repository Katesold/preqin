import "./App.css";

import { Outlet } from "react-router-dom";
import { TableContainer } from "./components/TableContainer/TableContainer";
import GlobalStyle from "./global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <TableContainer />
    </>
  );
}

export default App;
