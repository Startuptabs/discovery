'use strict';

const { React, Base } = require('./base');
const Iframe = require('react-iframe');

class SingleTab extends Base {
  constructor() {
    super();
    this.state = {
      id: 1,
      logo: 'http://www.startuptabs.com/img/startuptabs_b.png',
      name: 'Startuptabs',
      tagline: 'Startup discovery and tracking',
      siteUrl: 'http://www.startuptabs.com'
    }
  }

  render() {
    return (
        <div>
          <img style={{width: '50px'}} src={this.state.logo} />
          {this.state.name} - {this.state.tagline}

          <div style={{position: 'relative'}}>
            <Iframe url={this.state.siteUrl}></Iframe>
          </div>
        </div>
    );
  }
}

module.exports = SingleTab;