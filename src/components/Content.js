import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';
import MainAppbar from './MainAppbar';


const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        height: '100vh',
        backgroundColor: theme.palette.background.default
    },
}));

/**
 * Main container for all of the components.
 */
const Content = ({ changeTheme, theme }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.main}>
            <MainAppbar theme={theme} changeTheme={changeTheme} />
        </Grid>
    );
};

export default Content;