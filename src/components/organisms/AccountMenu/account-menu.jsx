import React ,{useState} from 'react';
import { Link,IconButton }  from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link color="textPrimary" aria-controls="account-menu" aria-haspopup="true" onClick={handleClick}>
        Account<IconButton><ExpandMoreIcon  /></IconButton>
      </Link>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Invite Friends</MenuItem>
        <MenuItem onClick={handleClose}>Whishlist</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Help &amp; Support</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};


export default AccountMenu;