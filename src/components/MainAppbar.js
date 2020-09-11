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
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import usePhrases from '../hooks/usePhrases';

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

export default function MainAppbar({ changeTheme, theme }) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { phrases, setLanguage, language } = usePhrases();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleChangeLanguage = (event) => {
        const value = event.target.value;
        setLanguage(value);
    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    {/* <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
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