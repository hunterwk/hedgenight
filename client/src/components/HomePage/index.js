import { useEffect, useState } from "react";
import API from "../../util/API";
import "./styles.css";
import Timer from "../Timer";
import AboutUs from "../AboutUs";
import LoginPage from "../LoginPage";
import HistoryPage from "../History";
import { useAuth } from "../../util/authContext"

function HomePage() {
  const { isLoggedIn} = useAuth()
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="row">
    <div className="col-4 timer mx-auto">
      <Timer />
      </div>
      <div className="col-4 mx-auto">
      <AboutUs />
      </div>
      <div className="col-4 mx-auto">
        {isLoggedIn ? <HistoryPage /> : <LoginPage />}
      </div>
    </div>
  );
}
export default HomePage;
