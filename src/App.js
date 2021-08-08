import React from 'react';
 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddBook from './components/organisms/AddBook/add-book';
import MyLibraryPage from './pages/MyLibrary/my-library';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
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