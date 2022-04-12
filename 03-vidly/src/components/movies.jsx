import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  handleClick = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
    } = this.state;

    let filteredMovies = selectedGenre
      ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
      : allMovies;
    const count = filteredMovies.length;
    const movies = paginate(filteredMovies, currentPage, pageSize);
    if (count === 0)
      return <p className="pt-5 h4">There are no movies in the database!</p>;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3 pt-5">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col-9">
            <p className="pt-5 h4">Showing {count} movies in the database</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => {
                  return (
                    <tr key={movie._id}>
                      <th scope="row">{movie.title}</th>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          onClick={() => this.handleClick(movie)}
                          liked={movie.liked}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => this.handleDeleteMovie(movie)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              totalItems={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
}

export default Movies;
