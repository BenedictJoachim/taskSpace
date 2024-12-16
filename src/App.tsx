import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/admin">Admin Panel</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
