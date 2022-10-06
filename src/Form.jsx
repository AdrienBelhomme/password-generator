/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox, FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useEffect, useState } from 'react';

import './Form.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Form = (props) => {
  const { changeCheckbox } = props;
  const [checkbox, SetCheckbox] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

  const change = (event) => {
    console.log(event.target.value);
    console.log(changeCheckbox(event.target.value));
    // changeCheckbox(event.target.value);
  };

  const handleChange = (event) => {
    if (event.target.name === 'uppercase') {
      SetCheckbox((prev) => { return { ...checkbox, uppercase: !prev.uppercase }; });
    } else if (event.target.name === 'lowercase') {
      SetCheckbox((prev) => { return { ...checkbox, lowercase: !prev.lowercase }; });
    } else if (event.target.name === 'numbers') {
      SetCheckbox((prev) => { return { ...checkbox, numbers: !prev.numbers }; });
    } else if (event.target.name === 'symbols') {
      SetCheckbox((prev) => { return { ...checkbox, symbols: !prev.symbols }; });
    }
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
