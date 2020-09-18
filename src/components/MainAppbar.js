import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    SwipeableDrawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    FormControl,
    Select,
    MenuItem
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import MenuIcon from '@material-ui/icons/Menu';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import KeyboardIcon from '@material-ui/icons/Keyboard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '1rem',
        fontWeight: 900,
    },
    list: {
        width: 250,
    },
    languageSelect: {
        marginRight: theme.spacing(2),
    },
}));

export default function MainAppbar({ changeTheme, theme, phrases, language, changeLanguage }) {
    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleChangeLanguage = (event) => {
        const lang = event.target.value;
        changeLanguage(lang);
    }

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                <ListItem button key={phrases.calculator}>
                    <ListItemIcon><KeyboardIcon /></ListItemIcon>
                    <ListItemText primary={phrases.calculator} />
                </ListItem>
                <ListItem button key={phrases.blog}>
                    <ListItemIcon><AnnouncementIcon /></ListItemIcon>
                    <ListItemText primary={phrases.blog} />
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="button" align="left" className={classes.title}>
                        {phrases.taxCalculator}
                    </Typography>
                    <FormControl variant="outlined" margin="dense" className={classes.languageSelect}>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={language}
                            onChange={handleChangeLanguage}
                            dense
                        >
                            <MenuItem value={'bh'}>Bosanski</MenuItem>
                            <MenuItem value={'en'}>English</MenuItem>
                        </Select>
                    </FormControl>
                    <IconButton onClick={changeTheme} edge="start" color="inherit" aria-label="menu">
                        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div>
                <SwipeableDrawer
                    anchor='left'
                    open={drawerOpen}
                    onClose={toggleDrawer}
                    onOpen={toggleDrawer}
                >
                    {list()}
                </SwipeableDrawer>
            </div>
        </div>
    );
}