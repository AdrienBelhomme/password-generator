import { useState } from 'react';
import { Box, Grid, Typography, IconButton, Button, Slider } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

import './App.css';
import Checkbox from './Form';
import Strength from './Strength';

const App = () => {
  const theme = useTheme();

  const [value, setValue] = useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            Ab3!!
          </Grid>
          <Grid className="password-text icon-text" item xs={10}>
            <IconButton
              onClick={() => { return console.log('clicked'); }}
              aria-label="copy"
              variant="soft"
              size="large"
              className="button-text"
            >
              <ContentCopyIcon color="primary" />
            </IconButton>
            <IconButton
              onClick={() => { return console.log('clicked'); }}
              aria-label="copy"
              variant="soft"
              size="large"
              className="button-text"
            >
              <VisibilityIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="container" container>

        <Grid className="password-box" item container xs={12} sm={6} md={6} lg={4} xl={4}>
          <Grid className="value-length">
            <Typography className="text-length" color="primary" variant="h1" fontSize="24px">Character length</Typography>
            <Typography className="slider-text">{value}</Typography>
          </Grid>
          <Grid className="password-text slider" item xs={12}>
            <Slider
              onChange={handleChange}
              aria-label="length"
              defaultValue={15}
              valueLabelDisplay="auto"
              min={5}
              max={30}
              color="secondary"
            />
          </Grid>
          <Grid className="password-text checkbox-container" item xs={12}>
            <Checkbox />
          </Grid>
          <Grid className="strength-container" item xs={12}>
            <Strength />
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
