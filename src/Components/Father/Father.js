import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ house, ornaments }) => {
  return (
    <div style={{ display: "flex" }}>
      <h4>Father</h4>
      <p>House: {house}</p>
      <MySelf house={house} ></MySelf>
      <Sister house={house}></Sister>
      <Brother house={house}></Brother>
    </div>
  );
};

export default Father;