import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

function Dashboard() {
    const UserSurveys = lazy(() => import('../components/UserSurveys'));

    return (
        <div>
            <Link to="/survey">Create Survey</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <UserSurveys />
            </Suspense>
        </div>
    );
}

export default Dashboard;
