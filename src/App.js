import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import routes from './router';


const showContentMenus = (routes) => {
  var result = null;

  if (routes.length > 0) {
    result = routes.map((routes, index) => {
      return (
        <Route
        key={index}
          path={routes.path}
          exact={routes.exact}
          component={routes.main}
        />)
    })
  }
  return result;
}

function App(props) {

  return (
    <Router>
      <div className="App">
        {/* MENU */}
        <Menu />
        {/* NỘI DUNG */}
        {/* exact : kiểm tra sự trùng khớp chính xác */}
        <Switch>

          {(showContentMenus(routes))}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
