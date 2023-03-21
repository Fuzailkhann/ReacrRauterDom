import { Link, Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>This is a header</div>

      <ul>
        <li>
          {" "}
          <Link to="/aboutus">about</Link>
        </li>
        <li>
          <Link to="/contactMe">ContactMe</Link>
        </li>
        <li>
          <Link to="/test" target="_blank">
            Test
          </Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
      <div className="container">
        <div className="sideBar">
          sidebar
          <ul>
            <li>test1</li>
            <li>text1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
