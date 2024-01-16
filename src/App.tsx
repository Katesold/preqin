import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
      <Link to={`investor/1`}>investor</Link>
    </div>
  );
}

export default App;
