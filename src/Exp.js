import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text
}) => {
  return (
    <li
        style={{ backgroundColor: isSelected ? 'green' : 'red'}}
        onClick={onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items
}) => {
  const [selectedIndex,setSelectedIndex ] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };
const mapper=(item, index) => (
    <SingleListItem
        onClickHandler={handleClick(index)}
        text={item.text}
        index={index}
        isSelected={selectedIndex === index}
    />
  )
  return (
    <ul style={{ textAlign: 'left' }}>
      {items && items.map(mapper)}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.array(PropTypes.shapeOf({
    text: PropTypes.string.isRequired
  }))
};

WrappedListComponent.defaultProps = {
  items: null
};

const List = memo(WrappedListComponent);

export default List;