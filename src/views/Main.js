import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';
import MainAppbar from '../components/MainAppbar';
import Calculator from '../components/Calculator';


const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default
    },
    content: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(4)
    },
}));

/**
 * Main container for all of the components.
 */
const Content = ({ changeTheme, theme, phrases, language, changeLanguage }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.main}>
            <Grid item xs={12}>
                <MainAppbar
                    theme={theme}
                    changeTheme={changeTheme}
                    phrases={phrases}
                    language={language}
                    changeLanguage={changeLanguage} />
            </Grid>

            <Grid className={classes.content} item xs={12}>
                <Calculator
                    phrases={phrases}
                    theme={theme}
                />
            </Grid>
        </Grid>
    );
};

export default Content;