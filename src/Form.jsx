import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';

import './Checkbox.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Form = () => {
  /* const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false); */
  const [checkbox, SetCheckbox] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

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

  console.log(checkbox);

  return (
    <FormGroup onChange={handleChange} className="checkbox">
      <FormControlLabel name="uppercase" control={<Checkbox value={checkbox.uppercase} defaultChecked color="secondary" />} className="checkbox" label="Include Uppercase Letters" />
      <FormControlLabel name="lowercase" control={<Checkbox value={checkbox.lowercase} defaultChecked color="secondary" />} className="checkbox" label="Include Lowercase Letters" />
      <FormControlLabel name="numbers" control={<Checkbox value={checkbox.numbers} color="secondary" />} className="checkbox" label="Include Numbers" />
      <FormControlLabel name="symbols" control={<Checkbox value={checkbox.symbols} color="secondary" className="checkbox" />} className="checkbox" label="Include Symbols" />
    </FormGroup>

  );
};

export default Form;
