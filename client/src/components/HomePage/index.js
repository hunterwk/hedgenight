import { useEffect, useState } from "react";
import API from "../../util/API";
import GoT from "../GoTblock";
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
    <div>
      <GoT />
      {/* why tf won't image show??????? */}
      <img src="../src/components/Logo/" alt="" />
      <h1>HedgeNight</h1>
      <h3>Dashboard</h3>
      {/* <p>{data && data.message}</p> */}
      <Timer />
      
    </div>
  );
}
export default HomePage;
