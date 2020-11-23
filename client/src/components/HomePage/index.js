import { useEffect, useState } from "react";
import API from "../../util/API";
import "./styles.css";
import Timer from "../Timer";
import AboutUs from "../AboutUs";


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
      <AboutUs />
    </div>
  );
}
export default HomePage;
