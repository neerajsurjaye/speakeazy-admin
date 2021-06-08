import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'

let Navbar = (props) => {

    const useStyles = makeStyles((theme) => ({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            // backgroundColor: '#444'
        },
        button: {
            color: '#fff'
        }
    }))

    let classes = useStyles()

    return (
        <AppBar className={classes.appBar} position='static'>
            <Toolbar>
                {/* <IconButton
                    className={classes.button}
                    onClick={() => props.setDrawer(!props.drawer)}
                >

                    <MenuIcon></MenuIcon>

                </IconButton> */}


                <Typography variant='h5'>Speakeazy</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar