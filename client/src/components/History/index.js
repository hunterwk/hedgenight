import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import API from "../../util/API";

function ProtectedExamplePage() {
    const { logout, user } = useAuth();
    const [data, setData] = useState([]);


    useEffect(() => {
        API.findTasks().then(({ data }) => {
            setData(data);
            console.log(data);
        });
    }, []);




    return (
        <div>
            <h1>History Card</h1>
            <p>{user.tasks.id}</p>
            <p>{user.tasks.notes}</p>
            <p>{user.tasks.duration}</p>
            <h3>Protected API Data Example</h3>
            {data.length === 0
                ? <h3 className="text-center">WELCOME NEWCOMER</h3>
                : data.map((tasks) => (
                    <p key={tasks._id.toString()} onClick={() => API.loadTasks(tasks._id.toString())}>{tasks.name}<br />{tasks.duration}<br />{tasks.notes}<br /></p>))}
        </div>
    );
}

export default ProtectedExamplePage;
// {data && <pre>{JSON.stringify(data)}</pre>}
