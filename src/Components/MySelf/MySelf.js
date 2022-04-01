import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornaments }) => {
  return (
    <div>
      <h5>My Self</h5>
      <p>
        <small>House: {house}</small>
      </p>
      <Special ornaments={ornaments}></Special>
    </div>
  );
};

export default MySelf;