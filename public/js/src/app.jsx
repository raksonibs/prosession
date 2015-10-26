var React = require('react');
var Tasks = require('./components/Tasks.jsx');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var action = require('./../actions/TaskActionCreator.jsx');

React.render(
    <Tasks />,
    document.getElementById('tasks')
);