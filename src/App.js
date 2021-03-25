import {Route, Link} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import TaskDetails from './pages/TaskDetails/TaskDetails';
import { Provider } from 'react-redux';
import store from './store/configureStore';

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <header>
          <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/details">Details</Link></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={TaskDetails} />
      </div>
    </Provider>
  );
}

export default App;
