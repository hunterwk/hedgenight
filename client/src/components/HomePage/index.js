import { useEffect, useState } from "react";
import API from "../../util/API";
<<<<<<< HEAD
import GoT from "../GoTblock";
import Timer from "../Timer";
=======
import Timer from "../Dashboard";
>>>>>>> 19989811b194aa204eb857bc449f3357a6481b9c

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
      <h1>HedgeNight</h1>
      <h3>Dashboard</h3>
      {/* <p>{data && data.message}</p> */}
      <Timer />
      
    </div>
  );
}
export default HomePage;
