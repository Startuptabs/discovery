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

  getBackground(){
    var background_position = localStorage['background_position']? localStorage['background_position']:0;
    var backgrounds = localStorage['backgrounds']? localStorage['backgrounds']: [
      'http://www.theocmx.com/wp-content/uploads/2015/06/Start-Up-Branding-Tips.jpg',
      'http://static1.businessinsider.com/image/50e5955a6bb3f7652400000e/the-12-coolest-startup-offices-weve-ever-seen.jpg',
      'http://www.eyes4tech.com/wp-content/uploads/2013/07/startup-office.jpg',
      'http://rack.2.mshcdn.com/media/ZgkyMDEzLzA2LzIwLzI1L091dGJyYWluTllDLjQwZDEzLmpwZwpwCXRodW1iCTEyMDB4OTYwMD4/4c56473d/37b/Outbrain-NYC-Office.jpg',
      'https://decoraid.com/wp-content/uploads/2014/07/refinery29.com_.jpg',
      'https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg'];
    var background = backgrounds[background_position];

    if(background_position >= backgrounds.length - 1){
      localStorage['background_position'] = 0;
    }else{
      background_position++;
      localStorage['background_position'] = background_position;
    }

    return background;
  }

  render() {
    var view = '';
    switch(this.state.view){
      case 'Background':
        view = <BackgroundTab background={this.getBackground()} />;
        break;
      case 'Single': view = <SingleTab />; break;
      case 'Dual': view = <DualTab />; break;
      case 'Quad': view = <QuadTab />; break;
    }

    var menuStyle = {
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 99
    };

    return (
      <div style={{marginTop: '45px'}}>
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