/* eslint-disable react/jsx-props-no-spreading */
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useEffect, useState } from 'react';

import './Form.css';

const Form = (props) => {
  const { changeCheckbox } = props;
  const [checkbox, SetCheckbox] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

  const handleChange = (event) => {
    SetCheckbox((prev) => { return { ...checkbox, [event.target.name]: !prev[event.target.name] }; });
  };

  useEffect(() => {
    changeCheckbox(checkbox);
  }, [checkbox]);

  return (
    <FormGroup onChange={handleChange} className="checkbox">
      <FormControlLabel name="uppercase" control={<Switch value={checkbox.uppercase} defaultChecked color="secondary" />} className="checkbox" label="Include Uppercase Letters" />
      <FormControlLabel name="lowercase" control={<Switch value={checkbox.lowercase} defaultChecked color="secondary" />} className="checkbox" label="Include Lowercase Letters" />
      <FormControlLabel name="numbers" control={<Switch value={checkbox.numbers} color="secondary" />} className="checkbox" label="Include Numbers" />
      <FormControlLabel name="symbols" control={<Switch value={checkbox.symbols} color="secondary" />} className="checkbox" label="Include Symbols" />
    </FormGroup>

  );
};

export default Form;
