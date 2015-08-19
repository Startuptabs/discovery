'use strict';

const { React, Base } = require('./base');
const Startup = require('./startup');
const {Grid,Row,Col} = require('react-bootstrap');

class DualTab extends Base {
  constructor() {
    super();
    this.state = { startups: [
      {
        id: 1,
        logo: 'http://www.startuptabs.com/img/startuptabs_b.png',
        name: 'Startuptabs',
        tagline: 'Startup discovery and tracking',
        screenshot: 'https://lh6.googleusercontent.com/BDRbmJLOkHF0UUOVj44_Qquv19SB3ujoxF7ltR5kfodMzM1Za37hcRBEscr5NFDvUgUJhS0ZQA=s640-h400-e365-rw'
      },
      {
        id: 2,
        logo: 'http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_900,w_1200/rywslqmzzn06nyeodyxw.jpg',
        name: 'Gethoneybadger',
        tagline: 'Startup Info on Demand',
        screenshot: 'https://lh3.googleusercontent.com/QaqIb8-UFdwnc2N17b8bVWIOiEbiripjerLFpfumGkmv7KpgflSowo8m2jXwXXIZyL3KDhb177w=s640-h400-e365-rw'
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
                <Startup
                  logo={startup.logo}
                  name={startup.name}
                  tagline={startup.tagline}
                  screenshot={startup.screenshot}
                  />
              </Col>
            })
          }
          </Row>
        </Grid>
    );
  }
}

module.exports = DualTab;