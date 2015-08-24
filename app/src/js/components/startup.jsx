'use strict';

const { React, Base } = require('./base');
const { Well } = require('react-bootstrap');
const extend = require('extend');


class Startup extends Base {
  constructor(test) {
    super();
  }

  render() {
    var style={
      paddingTop: '60px',
      minHeight: '700px',
      borderRadius: '25px',
      backgroundColor: 'rgba(0,0,0,.25)'
    };

    var prop_style = extend(style, this.props.style);


    return (
        <Well className="text-center" style={prop_style}>
          <img style={{height: '150px'}}src={this.props.logo} />
          <h2>{this.props.name}</h2>
          <h3>{this.props.tagline}</h3>
          <img className="img-responsive img-thumbnail" src={this.props.screenshot} />
        </Well>
    );
  }
}

module.exports = Startup;