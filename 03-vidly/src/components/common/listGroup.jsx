import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, nameProperty, valueProperty, selectedItem, onSelect } = props;
  return (
    <ul className="list-group">
      <li
        className={!selectedItem ? "list-group-item active" : "list-group-item"}
        onClick={() => onSelect(null)}
      >
        All items
      </li>
      {items.map((item) => {
        return (
          <li
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onSelect(item)}
          >
            {item[nameProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  nameProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
