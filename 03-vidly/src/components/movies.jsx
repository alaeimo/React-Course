import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleLike = (movie) => {
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, selectedGenre: null });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      searchQuery,
      sortColumn,
    } = this.state;
    let filteredMovies = selectedGenre
      ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
      : allMovies;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredMovies = filteredMovies.filter((m) =>
        m.title.toLowerCase().startsWith(query)
      );
    }
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const count = sortedMovies.length;
    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { count, movies };
  };
  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;
    const { count, movies } = this.getPagedData();
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
            <Link to="/movies/new" className="btn btn-primary mt-5 mb-2">
              New Movie
            </Link>
            <p className="h4">
              {count
                ? `Showing ${count} movies in the database`
                : "There are no movies in the database!"}
            </p>
            <SearchBox onChange={this.handleSearch} />
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDeleteMovie}
              onSort={this.handleSort}
            />

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
