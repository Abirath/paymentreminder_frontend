import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, CssBaseline, Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PaymentView from "../payments/PaymentView";
import DocumentsView from "../documents/DocumentsView";
import MaintenanceView from "../maintenance/MaintenanceView";
import Header from "../shared/Header";
import './SideNavBar.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CommentIcon from '@material-ui/icons/Comment';
import AssistantIcon from '@material-ui/icons/Assistant';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: theme.palette.background.default,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);

function SideNavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className="header__toolbar">
                    {/* <Header /> */}
                </Toolbar>
            </AppBar>
            <Router>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left">
                    <div className={classes.toolbar} />
                    <Divider />
                    <List>
                        <ListItem button component={Link} to="/PaymentView">
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button component={Link} to="/DocumentsView">
                            <ListItemIcon><CommentIcon /></ListItemIcon>
                            <ListItemText primary="Documents" />
                        </ListItem>
                        <ListItem button component={Link} to="/MaintenanceView">
                            <ListItemIcon><AssistantIcon /></ListItemIcon>
                            <ListItemText primary="Maintenance" />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path="/PaymentView" component={PaymentView} />
                        <Route path="/DocumentsView" component={DocumentsView} />
                        <Route path="/MaintenanceView" component={MaintenanceView} />
                        <Route path="/" component={PaymentView} />
                    </Switch>
                </main>
            </Router>
        </div >
    )
}

export default SideNavBar
