'use strict';

const { React, Base } = require('./base');
const Iframe = require('react-iframe');

class SingleTab extends Base {
  constructor() {
    super();
    console.log(this.props);
  }

  render() {
    return (
        <div>
          <img style={{width: '50px'}} src={this.props.logo} />
          {this.props.name} - {this.props.tagline}

          <div style={{position: 'relative'}}>
            <Iframe url={this.props.siteUrl}></Iframe>
          </div>
        </div>
    );
  }
}

module.exports = SingleTab;