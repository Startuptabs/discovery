'use strict';

const { React, Base } = require('./base');

class BackgroundTab extends Base {
  constructor() {
    super();
  }

  render() {
    var style = {
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: `url(${this.props.backgroundUrl})`
    }

    return (
        <div style={style}>Testing213</div>
    );
  }
}

module.exports = BackgroundTab;