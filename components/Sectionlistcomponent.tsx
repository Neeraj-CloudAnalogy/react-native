import React from 'react';
import { Text,SectionList,View } from 'react-native';
function Sectionlistcomponent() {
    const list = [
        { name: "Neeraj", age: 20, data: ["Java", "JS"] },
        { name: "Gaurav", age: 22, data: ["Python", "React"] },
        { name: "Amit", age: 23, data: ["C#", "Angular"] },
        { name: "Ravi", age: 21, data: ["Ruby", "Node.js"] }
    ];
    return (
       <>
       <SectionList
       sections={list}
       renderItem={({item})=>{
         return (<Text style={{ textAlign:"center",color:"brown",margin:10,borderColor:"lightgreen",borderWidth:2}}>
            {item}
         </Text>)
       }}
       renderSectionHeader={({section:{name}})=>{return <View style={{ flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
<Text style={{ fontWeight: 'bold', fontSize: 22 ,borderWidth:5,borderRadius:10,padding:10, backgroundColor:"lightyellow"}}>{name}</Text>;  

       </View>
        }}
       
       keyExtractor={(item , index) => index.toString()}
       
       
       
       />

      
       
       
       
       </>
    );
}

export default Sectionlistcomponent;