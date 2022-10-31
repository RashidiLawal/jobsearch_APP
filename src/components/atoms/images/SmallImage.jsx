import React from 'react'

const SmallImage = ({ caret, filter, style }) => {
  return <img src={caret} alt={filter} style={style} />;
};

export default SmallImage