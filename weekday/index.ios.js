//Import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry; 
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Create a react component
var Weekdays = React.createClass({
  render: function(){
    return  <View style={styles.container}>
      <Text>
          Days of the week:
      </Text>
      {this.days()}
    </View>
  },
  days:function(){
      return DAYS.map(function(day){
        //called 7 times, one for each day fo the week
        return <DayItem day={day} />
      });
  }
});

//Style the React component
var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center', //Move stuff height wise
    alignItems: 'center'    //Move stuff width wise
  } 
});

//Show the react component on the scree
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
})