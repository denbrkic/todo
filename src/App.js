import {Route} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import TaskDetails from './pages/TaskDetails/TaskDetails';
import { Provider } from 'react-redux';
import store from './store/configureStore';

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/task/:id" exact component={TaskDetails} />
      </div>
    </Provider>
  );
}

export default App;
