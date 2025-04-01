import React, { useContext } from 'react';
import { myContext ,mytext } from './PropsDrillingAndContextApi'; 
import { Text } from 'react-native';
function ComponentC() {
    // const title :string =useContext(myContext);
    const obj =useContext(myContext);
    const obj1 =useContext(mytext);
    return (
       <>
       <Text>
        {obj.title}

        
      
       </Text>
       <Text>
        {obj.Name}
        {obj1}

    
      
       </Text>
       </>
    );
}

export default ComponentC;