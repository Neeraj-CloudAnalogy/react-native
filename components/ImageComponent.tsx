import React from 'react';
import { View, Image } from 'react-native';

function ImageComponent() {
    return (
        <View style={{gap:10,marginTop:20,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Image source={{uri:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'}}
                  style={{width: 100, height: 100, borderRadius:100,opacity:0.5}}
                  onLoad={(()=>console.log('image loaded'))}
                  />
            <Image source={require('../assets/photo1.jpeg')}
                  style={{width: 200, height: 300}}
                  resizeMode='contain'/>
                  </View>
    );
}

export default ImageComponent;