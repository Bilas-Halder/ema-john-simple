import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route path='/' exact><Shop></Shop></Route>
          <Route path='/order-review'><OrderReview></OrderReview></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
