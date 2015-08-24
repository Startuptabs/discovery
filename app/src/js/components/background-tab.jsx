'use strict';

const { React, Base } = require('./base');
const { Spring } = require('react-motion');
const _ = require('lodash');


/*
Shows a background in queue
Retrieves backgrounds and displays them one at a time
Remove from background queue as they are displayed
Get more backgrounds when queue size hits 2
 */
class BackgroundTab extends Base {
  constructor(props) {
    super(props);
    console.log(props);
    /*this.state = {
      backgrounds: [
        'http://landt.co/wp-content/uploads/2014/06/Startups.png',
     'http://www.theocmx.com/wp-content/uploads/2015/06/Start-Up-Branding-Tips.jpg',
     'http://static1.businessinsider.com/image/50e5955a6bb3f7652400000e/the-12-coolest-startup-offices-weve-ever-seen.jpg',
     'http://www.eyes4tech.com/wp-content/uploads/2013/07/startup-office.jpg',
     'http://rack.2.mshcdn.com/media/ZgkyMDEzLzA2LzIwLzI1L091dGJyYWluTllDLjQwZDEzLmpwZwpwCXRodW1iCTEyMDB4OTYwMD4/4c56473d/37b/Outbrain-NYC-Office.jpg',
     'https://decoraid.com/wp-content/uploads/2014/07/refinery29.com_.jpg',
     'https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg'
      ]
    };*/

    this.state = {
      background: props.background
    }
  }

  render() {
    var style = {
      position: 'fixed',
      top: 0,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: `url(${this.state.background})`,
      backgroundRepeat: 'no-repeat'
    };

    return (
        <Spring defaultValue={{val: 0 }} endValue={{val:1}}>
          {interpolated => <div style={_.merge(style,{opacity: interpolated.val}) }>{this.props.children}</div>}
        </Spring>
    );
  }
}

module.exports = BackgroundTab;