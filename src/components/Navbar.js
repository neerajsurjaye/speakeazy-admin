import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

let Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        }
    }))

    let classes = useStyles()

    return (
        <AppBar className={classes.appBar} position='fixed'>
            <Toolbar>
                <Typography variant='h5'>Speakeazy</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar