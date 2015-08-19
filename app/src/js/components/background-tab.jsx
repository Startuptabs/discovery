'use strict';

const { React, Base } = require('./base');

class BackgroundTab extends Base {
  constructor() {
    super();
    this.state = {
      backgrounds: [
        'http://landt.co/wp-content/uploads/2014/06/Startups.png',
          'http://www.theocmx.com/wp-content/uploads/2015/06/Start-Up-Branding-Tips.jpg'
      ]
    }
  }

  render() {
    var random = Math.round( Math.random() * (this.state.backgrounds.length - 1) );

    var background = this.state.backgrounds[ random ];

    var style = {
      position: 'fixed',
      top: 0,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat'
    }

    return (
        <div style={style}></div>
    );
  }
}

module.exports = BackgroundTab;