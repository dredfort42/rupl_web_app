import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>
                <h1>rupl</h1>
                <p>Your personal running coach</p>
                <p>
                    Track your runs, get insights and improve your performance
                </p>
            </div>
            <div>
                <h1>GitHub</h1>
                <div>
                    <Link to="https://github.com/dredfort42/rupl">
                        Open source project for everyone who wants to run
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
