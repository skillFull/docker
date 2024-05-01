import { useNavigate, Outlet } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate("/hello")}>hello</button>
        <button onClick={() => navigate("/second")}>second page</button>
        <button onClick={() => navigate("/counter")}>main</button>
      </div>
      <Outlet />
    </>
  );
};
