import { Grid, Typography } from '@mui/material';

import './strength.css';

const Strength = () => {
  return (
    <Grid className="strength-box flex-space-between" item container xs={12} sm={6} md={6} lg={4} xl={4}>
      <Grid className="strength-text" item xs={9}>
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '18px' }}>
          STRENGTH
        </Typography>
      </Grid>

    </Grid>
  );
};

export default Strength;
