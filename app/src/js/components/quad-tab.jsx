'use strict';

const { React, Base } = require('./base');
const StartupMini = require('./startup-mini');

class QuadTab extends Base {
  constructor() {
    super();
    this.state = { startups: [
      {
        id: 1,
        logo: 'http://www.startuptabs.com/img/startuptabs_b.png',
        name: 'Startuptabs',
        tagline: 'Startup discovery and tracking'
      },
      {
        id: 2,
        logo: 'http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_900,w_1200/rywslqmzzn06nyeodyxw.jpg',
        name: 'Gethoneybadger',
        tagline: 'Startup Info on Demand'
      },
      {
        id: 3,
        logo: 'http://www.amplfy.co/images/logo.png',
        name: 'Amplfy',
        tagline: 'Social Media Campaign Orchestration'
      },
      {
        id: 4,
        logo: 'http://files.stiqr.com/public/images/22314.png',
        name: 'Stiqr',
        tagline: 'No Code. Just Stick it!'
      }

    ] };
  }

  render() {
    return (
        <div>
          {
            this.state.startups.map((startup) => {
              return <StartupMini
                  key={startup.id}
                  logo={startup.logo}
                  name={startup.name}
                  tagline={startup.tagline}
                  />
            })
          }
        </div>
    );
  }
}

module.exports = QuadTab;