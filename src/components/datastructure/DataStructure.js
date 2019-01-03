import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    align: "left",
    display:'flex'
  },
  input: {
    display: 'none',
  },
});


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#334d4d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f0f5f5',
      contrastText: '#334d4d',
    },
  },
});

class DataStructure extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Button
            variant="fab"
            color="secondary"
            className={classes.button}
            onClick={e => this.props.manageJS('DataStructure')}
          >
            close
          </Button>
          <h1>Data Structure</h1>
        </MuiThemeProvider>
      </div>
    )
  }
};

DataStructure.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataStructure);