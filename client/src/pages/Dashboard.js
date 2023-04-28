import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            Dashboard
            <Link to="/survey">Create Survey</Link>
        </div>
    );
}

export default Dashboard;
