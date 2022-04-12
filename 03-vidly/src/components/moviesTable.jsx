import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort } = this.props;
    const columns = [
      { path: "title", value: "Title" },
      { path: "genre.name", value: "Genre" },
      { path: "numberInStock", value: "Stock" },
      { path: "dailyRentalRate", value: "Rate" },
      { key: "like" },
      { key: "delete" },
    ];
    return (
      <table className="table">
        <TableHeader columns={columns} onSort={onSort} onDelete={onDelete} />
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like onClick={() => onLike(movie)} liked={movie.liked} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
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
    );
  }
}

export default MoviesTable;
