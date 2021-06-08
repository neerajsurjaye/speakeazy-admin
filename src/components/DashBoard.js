import { Divider, Drawer, List, ListItem, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

let DashBoard = (props) => {
    let useStyles = makeStyles(() => ({
        root: {
            width: 240,
            borderRight: '1px solid rgba(0, 0, 0, 0.12)'
        }
    }))

    let classes = useStyles()

    return <div className={classes.root}>

        <List >
            <ListItem>
                <Typography variant='h5'>DashBoard</Typography>
            </ListItem>

            <Divider variant='middle'></Divider>

            <ListItem button>
                <Typography vairant='h4'>Users</Typography>
            </ListItem>

            <ListItem button>
                <Typography vairant='h4'>Coupons</Typography>
            </ListItem>


        </List>


    </div>
}

export default DashBoard;