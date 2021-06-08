import { Button, List, ListItem, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import React, { useState } from 'react'

let ConsoleNav = () => {
    let useStyles = makeStyles((theme) => ({
        root: {
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
        },
        button: {
            textTransform: 'None'
        }
    }))

    let classes = useStyles()

    let [sort, setSort] = useState('ByDate')

    return (

        <Toolbar className={classes.root}>

            <Typography variant='p' color='textSecondary'>Sort : </Typography>
            <Button className={classes.button}>
                <Typography>{sort}</Typography>
                <ArrowDropDown />
            </Button>

        </Toolbar>
    )
}

export default ConsoleNav;