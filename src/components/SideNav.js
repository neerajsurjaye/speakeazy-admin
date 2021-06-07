import { Drawer, List, ListItem, ListItemText, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

let SideNav = () => {

    let useStyles = makeStyles(({
        listCtrl: {
            marginTop: 50
        }
    }))

    let classes = useStyles()

    return (
        <Drawer
            variant={'permanent'}
            anchor={'left'}
            open={true}
        >

            <List className={classes.listCtrl}>
                <ListItem>
                    <Paper></Paper>
                </ListItem>

                <ListItem button>
                    <ListItemText primary='Users' />
                </ListItem>

                <ListItem button>
                    <ListItemText primary='Coupons' />
                </ListItem>

            </List>

        </Drawer>
    )
}

export default SideNav