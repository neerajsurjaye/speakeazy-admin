import { AppBar, makeStyles, Toolbar } from "@material-ui/core"
import Console from "./Console"
import DashBoard from "./DashBoard"


let Content = (props) => {

    let useStyles = makeStyles(() => ({
        root: {
            height: '100vh',
            display: 'flex'
        }
    }))

    let classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                <DashBoard></DashBoard>
                <Console></Console>
            </div>
        </>
    )
}

export default Content;