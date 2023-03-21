import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate();
  return (
    <>
      <h2>This is project if you click on button you will go to about page</h2>
      <button
        onClick={() => {
          navigate("/aboutus");
        }}
      >
        click me to go aboutpage
      </button>
    </>
  );
}
