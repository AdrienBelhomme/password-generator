import { useEffect, useState } from 'react';
import { Box, Grid, Typography, IconButton, Button, Slider } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

import './App.css';
import Form from './Form';
import Strength from './Strength';

const App = () => {
  const theme = useTheme();

  const [passwordLength, setPasswordLength] = useState(5);
  const [clipboard, setClipboard] = useState(false);

  const [checkbox, SetCheckbox] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

  const [password, setPassword] = useState('');

  const changeCheckbox = (boxValue) => {
    SetCheckbox(boxValue);
  };

  const handleChange = (event, newValue) => {
    setPasswordLength(newValue);
  };

  let result = '';

  const makePassword = (passwordlength) => {
    const charactersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '@#!)!(\'"$*';
    const charactersLength = charactersUpper.length;
    for (let i = 0; i < passwordlength; i += 1) {
      result += charactersUpper.charAt(Math.floor(Math.random()
 * charactersLength));
    }
    setPassword(result);
    return result;
  };

  useEffect(() => {
    makePassword(passwordLength);
  }, [passwordLength, checkbox]);

  const clipboardDelay = () => {
    return setTimeout(() => {
      setClipboard(false);
    }, '2000');
  };

  const copyToClipbaord = () => {
    navigator.clipboard.writeText(password);
    setClipboard(true);
    clipboardDelay();
  };

  clearTimeout(clipboardDelay);

  return (
    <Box className="bg-violet main-container img-bg-svg">
      <Grid className="container" container>
        <Grid item xs={12}>
          <Typography className="gray" variant="h1" fontSize="24px">Password Generator</Typography>
        </Grid>
        <Grid className="password-box flex-space-between" item container xs={12} sm={6} md={6} lg={4} xl={4}>
          <img className="girl" src="./src/assets/girl.svg" />
          <img className="cloud" src="./src/assets/cloud3.svg" />
          <Grid className="password-text" item xs={9}>
            {password}
          </Grid>
          <Grid className="password-text icon-text" item xs={10} sx={{ display: 'flex', alignItems: 'center' }}>
            {clipboard && <Typography color="secondary" sx={{ fontSize: '1.5rem', fontFamily: 'JetBrains Mono, monospace' }}>COPIED</Typography>}
            <IconButton
              onClick={copyToClipbaord}
              aria-label="copy"
              variant="soft"
              size="large"
              className="button-text"
              color="secondary"
            >
              <ContentCopyIcon color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="container" container>

        <Grid className="password-box" item container xs={12} sm={6} md={6} lg={4} xl={4}>
          <Grid className="value-length">
            <Typography className="text-length" color="primary" variant="h1" fontSize="24px">Character length</Typography>
            <Typography className="slider-text">{passwordLength}</Typography>
          </Grid>
          <Grid className="password-text slider" item xs={12}>
            <Slider
              onChange={handleChange}
              aria-label="length"
              defaultValue={5}
              valueLabelDisplay="auto"
              min={1}
              max={20}
              color="secondary"
            />
          </Grid>
          <Grid className="password-text checkbox-container" item xs={12}>
            <Form changeCheckbox={changeCheckbox} />
          </Grid>
          <Grid className="strength-container" item xs={12}>
            <Strength characterLength={passwordLength} />
          </Grid>
          <Grid className="button-generate" item xs={10}>
            <Button
              className="button-generate-inside"
              sx={{
              }}
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
            >
              Generate
            </Button>
          </Grid>
        </Grid>
      </Grid>

    </Box>

  );
};

export default App;
