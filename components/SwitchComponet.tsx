import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Switch ,Text} from 'react-native';

function SwitchComponet() {
    const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(!isEnabled);
    return (
        <>
        <Text style={styles.Text}>Status:
            {isEnabled ? 'Enabled' : 'Disabled'}
         </Text>
        <Switch
        style={{marginLeft:100, width:100 , height:100}}
  onValueChange={setIsEnabled}
  value={isEnabled}
  trackColor={{ false: "#767577", true: "#81b0ff" }}
  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
  
/>
        </>
    );
}
const styles = StyleSheet.create({
    Text: {
        fontSize: 30,
        color: 'blue',
        textAlign: 'center',
    },
});

export default SwitchComponet;