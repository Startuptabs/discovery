'use strict';

const { React, Base } = require('./base');
const BackgroundTab = require('./background-tab');
const SingleTab = require('./single-tab');
const DualTab = require('./dual-tab');
const QuadTab = require('./quad-tab');
const {Navbar, Nav, NavItem, Glyphicon} = require('react-bootstrap');
//var localStorage = (typeof localStorage == "undefined")?{}:localStorage;
var localStorage = require('localStorage');


const I = Glyphicon;

class StartupTabs extends Base {
  constructor(props) {
    super();

    this.views = [ 'Background', 'Single', 'Dual', 'Quad' ];

    var view = props.view;

    if(!view){
      view = localStorage['view']? localStorage['view']: 'Background';
    }

    this.state = {
      view
    }
  }

  setView(view){
    localStorage['view'] = view;
    this.setState({view: view});
  }

  active(view) {
    return (view == this.state.view)
  }

  render() {
    var view = '';
    switch(this.state.view){
      case 'Background': view = <BackgroundTab />; break;
      case 'Single': view = <SingleTab />; break;
      case 'Dual': view = <DualTab />; break;
      case 'Quad': view = <QuadTab />; break;
    }

    var menuStyle={
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 99
    };

    return (
      <div style={{marginTop: '60px'}}>
        <div style={menuStyle}>
          <Navbar brand={<a href="http://www.startuptabs.com" target="_blank">Startuptabs</a>} toggleNavKey={0}>
            <Nav left eventKey={0}>
              {this.views.map( (view,index) => {
                return (
                    <NavItem key={index} active={this.active(view)} eventKey={index} onClick={this.setView.bind(null, view)}>{view}</NavItem>
                )
              })}
            </Nav>
          </Navbar>
        </div>

        {view}

      </div>
    )
  }
}

module.exports = StartupTabs;