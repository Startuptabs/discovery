'use strict';

const { React, Base } = require('./base');
const Iframe = require('react-iframe');

class SingleTab extends Base {
  constructor() {
    super();

    var startups = [
      {
        id: 1,
        logo: 'http://www.startuptabs.com/img/startuptabs_b.png',
        name: 'Startuptabs',
        tagline: 'Startup discovery and tracking',
        siteUrl: 'http://www.startuptabs.com'
      },
      {
        id: 2,
        logo: 'http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_900,w_1200/rywslqmzzn06nyeodyxw.jpg',
        name: 'Gethoneybadger',
        tagline: 'Startup information with a click',
        siteUrl: 'http://www.gethoneybadger.com'
      },
      {
        id: 3,
        logo: 'http://www.amplfy.co/images/logo.png',
        name: 'Amplfy',
        tagline: 'Social Media Campaign Orchestration',
        siteUrl: 'http://www.amplfy.co'
      }
    ];

    this.state = {startups: startups};
  }

  render() {
    var random = Math.round( Math.random() * (this.state.startups.length - 1) );
    var startup = this.state.startups[ random ];

    return (
        <div>
          <img style={{width: '50px'}} src={startup.logo} />
          {startup.name} - {startup.tagline}

          <div style={{position: 'relative'}}>
            <Iframe url={startup.siteUrl}></Iframe>
          </div>
        </div>
    );
  }
}

module.exports = SingleTab;