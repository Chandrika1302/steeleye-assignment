
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
//wrappedSingleListItem is an arrow functionq
//We used curly braces inside arguments---it is called destructuring
//index,isSelected,onClickHandler,text----props
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
    //if background colour is se
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={onClickHandler(index)}
    >
      {text}
    </li>
  );
};
//PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype
//so here we are checking the datatype of index,isSelected,onClickHandler,text
WrappedSingleListItem.propTypes = {
  index: PropTypes.number,//10,9...
  isSelected: PropTypes.bool,//0 or 1
  //isRequired is to make sure a warning is shown if the prop isn't provided.
  onClickHandler: PropTypes.func.isRequired,//it should be function
  text: PropTypes.string.isRequired,//"hello"or something...should be in string
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
  //here items is an array
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.array(PropTypes.shapeOf({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;

