import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    const columns = [
      {
        path: "title",
        value: "Title",
        content: (item) => <Link to={`/movies/${item._id}`}>{item.title}</Link>,
      },
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
      <Table
        columns={columns}
        sortColumn={sortColumn}
        data={movies}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
