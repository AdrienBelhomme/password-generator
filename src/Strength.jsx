import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import './strength.css';
import { Pig, Coin, Vault, Wallet } from './assets';

const Strength = (props) => {
  const { characterLength } = props;

  const [imageAndmessage, setImageAndMessage] = useState({
    message: '',
    image: '',
  });

  const coin = 'ee';

  useEffect(() => {
    if (characterLength < 5) {
      setImageAndMessage({
        message: 'Too weak!',
        image: Coin,
      });
    } else if (characterLength >= 5 && characterLength < 10) {
      setImageAndMessage({
        message: 'Weak',
        image: Pig,
      });
    } else if (characterLength >= 10 && characterLength < 15) {
      setImageAndMessage({
        message: 'Medium',
        image: Wallet,
      });
    } else if (characterLength >= 15) {
      setImageAndMessage({
        message: 'Strong',
        image: Vault,
      });
    }
  }, [characterLength]);

  return (
    <Grid className="strength-box flex-space-between" item container sx={{ maxWidth: '100%' }}>
      <Grid className="strength-text" item sx={{ maxWidth: '100%', flexBasis: '100%', alignItems: 'center' }}>
        <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '18px', color: '#e2e2e2' }}>
          STRENGTH
        </Typography>
        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '18px', color: '#e2e2e2', fontWeight: '700',
          }}
          >
            {imageAndmessage.message.toUpperCase()}
          </Typography>
          <Grid sx={{ marginLeft: '1rem', display: 'flex' }}>
            <img src={imageAndmessage.image} className="strength-img" />
          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
};

export default Strength;
