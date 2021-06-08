import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import ConsoleNav from './ConsoleNav';

let Console = () => {
    let useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            height: '100%',
            // overflow: 'auto'
        }
    }))

    let classes = useStyles()

    return (
        <div className={classes.root}>

            <ConsoleNav></ConsoleNav>

        </div>
    )
}

export default Console;