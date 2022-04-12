import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    const columns = [
      { path: "title", value: "Title" },
      { path: "genre.name", value: "Genre" },
      { path: "numberInStock", value: "Stock" },
      { path: "dailyRentalRate", value: "Rate" },

      {
        key: "like",
        content: (item) => (
          <Like onClick={() => onLike(item)} liked={item.liked} />
        ),
      },
      {
        key: "delete",
        content: (item) => (
          <button
            onClick={() => onDelete(item)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          onDelete={onDelete}
          sortColumn={sortColumn}
        />
        <TableBody columns={columns} data={movies} />
      </table>
    );
  }
}

export default MoviesTable;
