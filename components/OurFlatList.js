import React, {Component} from 'react';
import { AppRegistry,FlatList, StyleSheet,Text,View,Image,TouchableOpacity,Button} from 'react-native';
import flatListData from '../data/flatListData';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native';
class FlatListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const{ navigation} = this.props
        return(
            <View style={{
                flex:1,
                flexDirection: 'row',
                backgroundColor: this.props.index % 2 == 0 ? 'darkblue': 'blue'
                              
            }}>
                <Image
                    source={{uri: this.props.item.imageUrl}}
                    style={{width: 100, height: 100, margin:5, borderRadius: 150}}
                    >
                </Image>
                <View style={{
                    flex:1,
                    flexDirection:'column'
                }}>
                    <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                    <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('App')}>
                        <Text>ir a gaaa</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class OurFlatList extends Component{
    render(){
        return (
            <View style={{flex:1, marginTop: 22}}>
                <FlatList 
                data={flatListData}
                renderItem={({item,index})=>{
                    return(
                        <FlatListItem item={item} index={index}>

                        </FlatListItem>);
                    
                }}
                >

                </FlatList>
            </View>
        )
    }
}