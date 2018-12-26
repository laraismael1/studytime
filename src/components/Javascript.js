import React, { Component } from 'react';
import ValuesVar from './ValuesVar';
import Objects from './Objects';
import Arrays from './Arrays';
import ES6 from './ES6';
import BigO from './BigO';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  label: {
    display: 'inline-flex',
  },
  info: {
    display: 'inline-block',
  },
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


class Javascript extends Component {
  state = {
    openValuesVar: true,
    openObjects: true,
    openArrays: true,
    openES6: true,
    openBigO: true,
  };

  handleValuesVar = () => {
    this.setState({
      openValuesVar: !this.state.openValuesVar,
      openObjects: true,
      openArrays: true,
      openES6: true,
    })
  }

  handleObjects = () => {
    this.setState({
      openValuesVar: true,
      openObjects: !this.state.openObjects,
      openArrays: true,
      openES6: true,
    })
  }

  handleArrays = () => {
    this.setState({
      openValuesVar: true,
      openObjects: true,
      openArrays: !this.state.openArrays,
      openES6: true,
    })
  }

  handleES6 = () => {
    this.setState({
      openValuesVar: true,
      openObjects: true,
      openArrays: true,
      openES6: !this.state.openES6,
    })
  }

  handleBigO = () => {
    this.setState({
      openValuesVar: true,
      openObjects: true,
      openArrays: true,
      openBigO: !this.state.openBigO,
    })
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Button
            variant="fab"
            color="secondary"
            className={classes.button}
            onClick={e => this.props.manageJS('JavaScript')}
          >
            close
          </Button>
          <h1>Learning JavaScript</h1>
          <div>
            <div className={classes.label}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={this.handleValuesVar}
              >
                values + variables
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={this.handleObjects}
              >
                objects
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={this.handleArrays}
              >
                array
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={this.handleES6}
              >
                ES6
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={this.handleBigO}
              >
                Big O
              </Button>
            </div>
            <br/>
            <div className={classes.info}>
              {!this.state.openValuesVar && <ValuesVar close={this.handleValuesVar}/>}
              {!this.state.openObjects && <Objects close={this.handleObjects}/>}
              {!this.state.openArrays && <Arrays close={this.handleArrays}/>}
              {!this.state.openES6 && <ES6 close={this.handleES6}/>}
              {!this.state.openBigO && <BigO close={this.handleBigO}/>}
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};

Javascript.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Javascript);