const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path='/' component={Main}>
        <IndexRoute component={Weather}></IndexRoute>
        <Route path='about' component={About}></Route>
        <Route path='examples' component={Examples}></Route>
    </Route>
</Router>, document.getElementById('app'));