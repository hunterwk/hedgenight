import { useEffect, useState } from "react";
import API from "../../util/API";
import GoT from "../GoTblock";
import Timer from "../Dashboard/timer.js";
import notes from "../Dashboard/notes.js";
import footer from "/Dashboard/footer.js";

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
