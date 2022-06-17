/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Fragment, Component } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   View,
   Button,
   Text
 } from 'react-native';
 
 
 class App extends Component {
   state = { count: 0 };
   decrementCount() {
     let { count } = this.state;
     count= count-1;
     this.setState({
       count
     })
   }
   incrementCount() {
     let { count } = this.state;
     count++;
     this.setState({
       count
     })
   }
   render() {
     const { count } = this.state;
     return (
      <SafeAreaView  style={{flex:1,}}>
       <View styles={styles.container}>
         <Button
           title="increment"
           onPress={() => this.incrementCount()}
         />
         <Text>{count}</Text>
         <Button
           title="decrement"
           onPress={() => this.decrementCount()}
         />
       </View>
       </SafeAreaView>
     );
   }
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   }
 });
 
 export default App;