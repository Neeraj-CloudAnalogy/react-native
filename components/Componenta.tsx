import React from 'react';
import { Text } from 'react-native-gesture-handler';
import ComponentB from './ComponentB';
function Componenta(props:any) {
    return (
       <>
       <Text>

        name :{props.name}

       </Text>
       <ComponentB surname={props.surname}/>
       </>
    );
}

export default Componenta;