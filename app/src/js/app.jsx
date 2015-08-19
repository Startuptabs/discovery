'use strict';

const React = require('react');
const Startuptabs = require('./components/startuptabs.jsx');

React.render(
    <Startuptabs style={{marginTop: '60px'}}/>,
    document.querySelector('#app-container')
);
