import React from 'react';

const SelectStatus = ({ onChange }) => {
  return (
    <select name="select" onChange={onChange}>
      <option value="Alive">Alive</option>
      <option value="Unknown">Unknown</option>
      <option value="Dead">Dead</option>
    </select>
  );
};

export default SelectStatus;
