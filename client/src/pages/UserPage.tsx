import * as React from 'react';
import { Grid, Typography, WithStyles, Button, withStyles, StyleRulesCallback } from 'material-ui';

class UserPage extends React.Component<WithStyles, {}> {
    render() {
        return (
            <Grid
                container
                className={this.props.classes.root}
                alignItems={'flex-start'}
                justify={'flex-start'}
            >
                <Grid item xs={2}>
                    <Typography variant="display1" gutterBottom>User List</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="raised" color="secondary" onClick={() => this.setState({ open: true })}>
                        Add User
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    User Table
                </Grid>
            </Grid>
        );
    }
}

const styles: StyleRulesCallback = theme => ({
    root: {
        padding: theme.spacing.unit * 10,
    },
});

export default (withStyles(styles)<{}>(UserPage));