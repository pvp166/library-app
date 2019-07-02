import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Items from "./webpages/Items";
import About from "./webpages/About";
import Search from "./webpages/Search";
import Edit from "./webpages/Edit";
import Navigation from "./Navigation";

class App extends React.Component {
  render() {
    
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/items' component={Items} />
            <Route path='/about' component={About} />
            <Route path='/search/:term' component={Search} />
            <Route path='/Edit' component={Edit} />
            <Route path='/search' component={Search} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}




export default App;
