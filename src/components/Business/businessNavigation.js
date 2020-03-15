import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CreateIcon from '@material-ui/icons/Create';
import FaceIcon from '@material-ui/icons/Face';
import HistoryIcon from '@material-ui/icons/DynamicFeed';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Active" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Create" value="create" icon={<CreateIcon />} />
      <BottomNavigationAction label="History" value="history" icon={<HistoryIcon />} />
      <BottomNavigationAction label="Profile" value="profile" icon={<FaceIcon />} />
    </BottomNavigation>
  );
}