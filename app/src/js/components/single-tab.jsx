'use strict';

const { React, Base } = require('./base');
const Iframe = require('react-iframe');
const Startup = require('./startup');

class SingleTab extends Base {
  constructor() {
    super();

    var startups = [
      {
        id: 1,
        logo: 'http://www.startuptabs.com/img/startuptabs_b.png',
        name: 'Startuptabs',
        tagline: 'Startup discovery and tracking',
        siteUrl: 'http://www.startuptabs.com',
        screenshot: 'https://lh6.googleusercontent.com/BDRbmJLOkHF0UUOVj44_Qquv19SB3ujoxF7ltR5kfodMzM1Za37hcRBEscr5NFDvUgUJhS0ZQA=s640-h400-e365-rw'
      },
      {
        id: 2,
        logo: 'http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_900,w_1200/rywslqmzzn06nyeodyxw.jpg',
        name: 'Gethoneybadger',
        tagline: 'Startup information with a click',
        siteUrl: 'http://www.gethoneybadger.com',
        screenshot: 'https://lh3.googleusercontent.com/QaqIb8-UFdwnc2N17b8bVWIOiEbiripjerLFpfumGkmv7KpgflSowo8m2jXwXXIZyL3KDhb177w=s640-h400-e365-rw'
      },
      {
        id: 3,
        logo: 'http://www.amplfy.co/images/logo.png',
        name: 'Amplfy',
        tagline: 'Social Media Campaign Orchestration',
        siteUrl: 'http://www.amplfy.co',
        screenshot: 'https://lh3.googleusercontent.com/QaqIb8-UFdwnc2N17b8bVWIOiEbiripjerLFpfumGkmv7KpgflSowo8m2jXwXXIZyL3KDhb177w=s640-h400-e365-rw'
      }
    ];

    this.state = {startups: startups};
  }

  render() {
    var random = Math.round( Math.random() * (this.state.startups.length - 1) );
    var startup = this.state.startups[ random ];

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