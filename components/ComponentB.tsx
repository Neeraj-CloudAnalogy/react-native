import React from 'react';
import { Text,View } from 'react-native';
import { mytext } from './PropsDrillingAndContextApi'; 
import Contact from './Contact';
import ComponentC from './ComponentC';
function ComponentB(props:any) {
    return (
        <>
        <mytext.Consumer>
            {(Newname)=>{
                return (
                    <View>
                         <Text>
                       updated data using create context:{Newname}

                      </Text>
                      
                    </View>

                )
            }
        
        }
          
        </mytext.Consumer>
        <ComponentC/>
        <Text>
         surname:{props.surname}
        </Text>
        </>
    );
}

export default ComponentB;