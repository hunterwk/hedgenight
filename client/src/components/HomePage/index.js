import { useEffect, useState } from "react";
import API from "../../util/API";
import Timer from "../Timer";
import AboutUs from "../AboutUs";
import "./styles.css";


function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h1>HedgeNight</h1>
      <h3>Dashboard</h3>
      {/* <p>{data && data.message}</p> */}
      <section className="row justify-content-around">

      </section>
      <Timer />

      <AboutUs />
      
    </div>
  );
}
export default HomePage;
