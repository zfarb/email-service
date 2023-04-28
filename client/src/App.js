import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Survey from './pages/Survey';

function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/survey" component={Survey} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
