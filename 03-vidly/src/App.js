import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Movie from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginForm";
import "./App.css";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
