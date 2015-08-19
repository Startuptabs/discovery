'use strict';

const { React, Base } = require('./base');
const StartupMini = require('./startup-mini');
const {Grid,Row,Col} = require('react-bootstrap');

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
      },
      {
        id: 5,
        logo: 'http://www.startuptabs.com/img/startuptabs_b.png',
        name: 'Startuptabs',
        tagline: 'Startup discovery and tracking'
      },
      {
        id: 6,
        logo: 'http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_900,w_1200/rywslqmzzn06nyeodyxw.jpg',
        name: 'Gethoneybadger',
        tagline: 'Startup Info on Demand'
      },
      {
        id: 7,
        logo: 'http://www.amplfy.co/images/logo.png',
        name: 'Amplfy',
        tagline: 'Social Media Campaign Orchestration'
      },
      {
        id: 8,
        logo: 'http://files.stiqr.com/public/images/22314.png',
        name: 'Stiqr',
        tagline: 'No Code. Just Stick it!'
      }

    ] };
  }

  render() {
    return (
        <Grid>
          <Row>
          {
            this.state.startups.map((startup) => {
              return <Col md={6} key={startup.id}>
              <StartupMini
                  logo={startup.logo}
                  name={startup.name}
                  tagline={startup.tagline}
                  />
                </Col>
            })
          }
          </Row>
        </Grid>
    );
  }
}

module.exports = QuadTab;