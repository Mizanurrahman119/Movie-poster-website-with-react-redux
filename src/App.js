import React from "react"
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoure/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/register">
                <Register></Register>
              </Route>

              <PrivateRoute path="/movie/:imdbID">
                <MovieDetail></MovieDetail>
              </PrivateRoute>

              <Route component={PageNotFound} />

            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
