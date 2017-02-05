const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');

const Weather = React.createClass({
    getInitialState: function(){
        return {
             isLoading : false
        }
    },
    handleSearch : function(location){      
       const outerThis = this;
       this.setState({isLoading : true});

       OpenWeatherMap.getTemp(location).then(function(temp){
           outerThis.setState({
               location : location,
               temp: temp,
               isLoading: false
            });
           
       },function(error){
           outerThis.setState({isLoading : false});
            alert(error);
       });
       
    },
    render: function() {
        const {isLoading,temp,location} = this.state;
        function renderMessage() {
            if(isLoading){
                return <h3>Fetching Data ...</h3>;
            }else if(temp && location) {
                return  <WeatherMessage temp = {temp} location={location}/>;
            }
        }
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch ={this.handleSearch}/>             
                {renderMessage()}  
            </div>            
        );
    }
});


module.exports = Weather;