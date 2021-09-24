import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <Router>
      <div>
        <Header setSearchText={setSearchText}></Header>
        <Switch>
          <Route path='/' exact><Shop searchText={searchText}></Shop></Route>
          <Route path='/order-review'><OrderReview searchText={searchText}></OrderReview></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
