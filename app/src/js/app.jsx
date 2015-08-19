'use strict';

const React = require('react');

const BackgroundTab = require('./components/background-tab');
const SingleTab = require('./components/single-tab');
const DualTab = require('./components/dual-tab');
const QuadTab = require('./components/quad-tab');

/*
React.render(
    <SingleTab
        logo="http://goboxi.com/media/Logo%20Goboxi.jpg"
        name="Startuptabs"
        tagline="Startup Discovery & Tracking"
        siteUrl="http://www.startuptabs.com"/>,
    document.querySelector('#background-tab')
);*/


/*
 React.render(
 <DualTab />,
 document.querySelector('#background-tab')
 );
*/

React.render(
    <QuadTab />,
    document.querySelector('#background-tab')
);
