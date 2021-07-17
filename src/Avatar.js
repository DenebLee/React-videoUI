import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import img from './icon/test.png';

const BlueAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    width:'15px',
    height:'15px',
    borderRadius: '50%',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
    height:'100vh',
    justifyContent:'center',
    alignItems:'center',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function BadgeAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <BlueAvatar alt="Host" src={img}  className={classes.large}/>
      </StyledBadge>
    </div>
  );
}
