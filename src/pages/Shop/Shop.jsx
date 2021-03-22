import React from "react";
import PropTypes from "prop-types";

import Item from "../../components/Item/Item.jsx";

import "./Shop.scss";

const Shop = ({ user, items, saveUserItem }) => {
  return (
    <div className="shop">
      <div className="shop-container">
        {items.map((item) => (
          <Item
            active={item._id === user.item}
            type={item.type}
            value={item.value}
            name={item.name}
            prize={item.prize}
            description={item.description}
            onClick={() => saveUserItem(item._id, user.counter)}
          />
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {
  user: PropTypes.shape({
    item: PropTypes.string,
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
      prize: PropTypes.number,
      description: PropTypes.string,
    })
  ),
  saveUserItem: PropTypes.func,
};

export default Shop;
