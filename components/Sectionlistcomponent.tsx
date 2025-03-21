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
       keyExtractor={(item , index) => item +index}
       renderItem={({item})=>{
         return (
          <View>
          <Text style={{ textAlign:"center",color:"brown",margin:10,borderColor:"lightgreen",borderWidth:2}}>
            {item}
          </Text>
          </View>

         )
       }}
       renderSectionHeader={({section})=>{
        return (
        <View style={{ flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
<Text style={{ fontWeight: 'bold', fontSize: 22 ,borderWidth:5,borderRadius:10,padding:10, backgroundColor:"lightyellow"}}>{section.name}
  </Text>;  

       </View>
     ) }}
       
       
       
       
       
       />

      
       
       
       
       </>
    );
}

export default Sectionlistcomponent;