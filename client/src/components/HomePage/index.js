import { useEffect, useState } from "react";
import API from "../../util/API";
import Timer from "../Timer";
import "./styles.css";


function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="timer">
      <Timer />
    </div>
  );
}
export default HomePage;
