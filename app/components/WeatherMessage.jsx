const React = require('react');

const WeatherMessage = React.createClass({
    render: function() {
        const {temp,location} = this.props;
        return (
            <h3>It is {temp}&deg; C in {location}.</h3>
        );
    }
});

module.exports = WeatherMessage;