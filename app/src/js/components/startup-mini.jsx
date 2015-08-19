'use strict';

const { React, Base } = require('./base');
const { Well } = require('react-bootstrap');

class StartupMini extends Base {
  constructor() {
    super();
  }

  render() {
    var style = {
      minHeight: '350px'
    };

    return (
        <Well style={style} className="text-center">
          <img style={{height: '100px'}}src={this.props.logo} />
          <h2>{this.props.name}</h2>
          <h3>{this.props.tagline}</h3>
        </Well>
    );
  }
}

module.exports = StartupMini;