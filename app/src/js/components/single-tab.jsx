'use strict';

const { React, Base } = require('./base');
const Iframe = require('react-iframe');
const Startup = require('./startup');

class SingleTab extends Base {
  constructor(props) {
    super(props);

    this.state = {startup: props.startup};
  }

  render() {
    var startup = this.state.startup;

    return (
        <div>
          <Startup
              style={{position:'absolute',top:'50px', width:'100%'}}
              logo={startup.logo}
              name={startup.name}
              tagline={startup.tagline}
              screenshot={startup.screenshot}
              />
          <div style={{position: 'relative'}}>
            <Iframe url={startup.siteUrl}></Iframe>
          </div>
        </div>
    );
  }
}

module.exports = SingleTab;