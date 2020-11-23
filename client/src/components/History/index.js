import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import API from "../../util/API";
import '../HomePage/styles.css';
import { Card } from "react-bootstrap";

function HistoryPage() {
    const { logout, user } = useAuth();
    const [data, setData] = useState([]);


    useEffect(() => {
        API.findTasks().then(({ data }) => {
            setData(data);
            console.log(data);
        });
    }, []);




    return (
        <div className="HistoryCard">
            <div className="CardGroup">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Title: {user.tasks.id}</Card.Title>
                        <Card.Text>
                            Notes: {user.tasks.notes}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Session time: {user.tasks.duration}</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Title: {user.tasks.id}</Card.Title>
                        <Card.Text>
                            Notes: {user.tasks.notes}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Session time: {user.tasks.duration}</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Title: {user.tasks.id}</Card.Title>
                        <Card.Text>
                            Notes: {user.tasks.notes}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Session time: {user.tasks.duration}</small>
                    </Card.Footer>
                </Card>
            </div>
            {data.length === 0
                ? <h3 className="text-center">fast stats</h3>
                : data.map((tasks) => (
                    <p key={tasks._id.toString()} onClick={() => API.loadTasks(tasks._id.toString())}>{tasks.name}<br />{tasks.duration}<br />{tasks.notes}<br /></p>))}
        </div>
    );
}

export default HistoryPage;

