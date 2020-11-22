import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import API from "../../util/API";

function ProtectedExamplePage() {
  const { logout, user } = useAuth();
  const [data, setData] = useState(null);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    API.findTasks().then(({ data }) => {
      setData(data);
      setIsNew(false);
      console.log(data);
    });
  }, []);

  const dataPrint = () => {
    if (data.length === 0) {
      return <h3 className="text-center">WELCOME NEWCOMER</h3>
    } else {
        // return {data.map((tasks)=> (<p key={tasks}>{tasks.name}<br/>{tasks.duration}<br/>{tasks.notes}<br/></p>)}
     return "data here"
    }
  };

  return (
    <div>
      <h1>Protected Stuff</h1>
      <p>user id: {user.id}</p>
      <p>username: {user.username}</p>
      <h3>Protected API Data Example</h3>
      {dataPrint()}
    </div>
  );
}

export default ProtectedExamplePage;
// {data && <pre>{JSON.stringify(data)}</pre>}
