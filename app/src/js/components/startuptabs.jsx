'use strict';

const { React, Base } = require('./base');
const BackgroundTab = require('./background-tab');
const SingleTab = require('./single-tab');
const DualTab = require('./dual-tab');
const QuadTab = require('./quad-tab');
const {Navbar, Nav, NavItem} = require('react-bootstrap');



class StartupTabs extends Base {
  constructor() {
    super();
    this.state = {
      view: 'Background'
    }
  }

  setView(view){
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
      <div>
        <div style={menuStyle}>
          <Navbar brand={<a href="#">Startuptabs</a>} toggleNavKey={0}>
            <Nav left eventKey={0}>
              <NavItem active={this.active('Background')} eventKey={1} onClick={this.setView.bind(null, 'Background')}>Background</NavItem>
              <NavItem active={this.active('Single')} eventKey={2} onClick={this.setView.bind(null, 'Single')}>Single</NavItem>
              <NavItem active={this.active('Dual')} eventKey={3} onClick={this.setView.bind(null, 'Dual')}>Dual</NavItem>
              <NavItem active={this.active('Quad')} eventKey={4} onClick={this.setView.bind(null, 'Quad')}>Quad</NavItem>
            </Nav>
          </Navbar>
        </div>

        {view}

      </div>
    )
  }
}

module.exports = StartupTabs;