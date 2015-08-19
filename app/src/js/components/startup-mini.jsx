'use strict';

const { React, Base } = require('./base');

class StartupMini extends Base {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
          <img style={{width: '75px'}}src={this.props.logo} />
          <h2>{this.props.name}</h2>
          <h3>{this.props.tagline}</h3>
        </div>
    );
  }
}

module.exports = StartupMini;