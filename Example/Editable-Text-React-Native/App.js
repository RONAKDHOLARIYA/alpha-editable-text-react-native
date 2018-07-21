import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditableText from './EditableText/EditableText';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name='hello world'
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <EditableText
                        value={this.state.name}
                        fontSize={12}
                        color={black50}
                        width={350}
                        multiline={true}
                        maxLength={128}
                        numberOfLines={4}
                        textAlign='justify'
                        Validate={(val)=>{
                            if(val==''){
                                return {'err':true,'msg':'Fill bio'}
                            }
                            return{'err':false,'msg':''}
                        }}
                        borderBottomColor='red'
                        borderBottomWidth={1}
                        ChangedValue={(val)=>{
                           this.setState({name:val})
                        }}
                        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
