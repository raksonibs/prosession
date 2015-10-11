var React = require('react');
var Tasks = require('./Tasks.jsx');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

React.render(
    <Tasks />,
    document.getElementById('tasks')
);