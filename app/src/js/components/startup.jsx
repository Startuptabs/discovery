'use strict';

const { React, Base } = require('./base');
const { Well } = require('react-bootstrap');

class Startup extends Base {
  constructor() {
    super();
  }

  render() {
    var style={
      paddingTop: '60px',
      minHeight: '700px',
      borderRadius: '25px'
    }
    return (
        <Well className="text-center" style={style}>
          <img style={{height: '150px'}}src={this.props.logo} />
          <h2>{this.props.name}</h2>
          <h3>{this.props.tagline}</h3>
          <img className="img-responsive img-thumbnail" src={this.props.screenshot} />
        </Well>
    );
  }
}

module.exports = Startup;