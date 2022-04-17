import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Movie from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import {} from "react-router-dom";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/movies/:id" component={Movie} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/rentals" component={Rentals} />
        <Route exact path="/" component={Movies} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
