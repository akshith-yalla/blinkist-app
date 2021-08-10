import React from 'react';
 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddBook from './components/organisms/AddBook';
import MyLibraryPage from './pages/MyLibrary';
import ExploreByCategory from './components/organisms/ExploreByCategory';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/explore">
            <ExploreByCategory />
          </Route>
          <Route path="/addBook">
            <AddBook />
          </Route>
          <Route path="/">
            <MyLibraryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}