import React, { useRef } from 'react';
import { View, Button, DrawerLayoutAndroid ,PermissionsAndroid, Alert } from 'react-native';

function OpenAndCloseDrawer() {
    const drawer = useRef<DrawerLayoutAndroid | null>(null);

    const navigationView = () => {
        return (
            <View>
                <Button
                    title='Close Drawer'
                    onPress={() => drawer.current?.closeDrawer()}
                />
            </View>
        );
    };
     const RequestPermission= async ()=> {
        const permission =await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Cool Photo App Camera Permission',
                message:
                  'Cool Photo App needs access to your camera ' +
                  'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
        );
        if(permission){
            Alert.alert('permission Successfull')
        }
        else{
            Alert.alert('permission UnSuccessfull')
        }
     }

    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            renderNavigationView={navigationView} 
            ref={drawer} 
        >
            <View>
                <Button
                    title='Open Drawer'
                    onPress={() => drawer.current?.openDrawer()} 
                />
            </View>

            <View>
                <Button
                    title='Request Permission'
                    onPress={RequestPermission} 
                />
            </View>
        </DrawerLayoutAndroid>
    );
}

export default OpenAndCloseDrawer;
