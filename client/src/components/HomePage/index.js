import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import API from "../../util/API";
import GoT from "../GoTblock";
import Timer from "../Timer";
import Logo from "../Logo";
import "./styles.css";


function HomePage() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <Logo />
      <GoT />
      {/* why tf won't image show??????? */}
      {/* <img src="../src/components/Logo/" alt="" /> */}
      {/* <p>{data && data.message}</p> */}
      <Timer />

      {/* {data.length === 0
        ? <h3 className="text-center">XD</h3>
        : data.map((tasks) => (
          <p key={tasks._id.toString()} onClick={() => API.loadTasks(tasks._id.toString())}>{tasks.name}<br />{tasks.duration}<br />{tasks.notes}<br /></p>))} */}

    </div>
  );
}
export default HomePage;
