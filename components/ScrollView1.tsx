import React from 'react';
import { StyleSheet, Text,Image, View, ScrollView } from 'react-native';

function HorizontalImageScroll() {
  const arr = [
    "https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.webp?s=2048x2048&w=is&k=20&c=S3Zow4qlkOvWySLGoM4MCERydeHBxRbQUjnSKH2vbNY=", 
    "https://cdn.pixabay.com/photo/2021/12/15/18/18/flowers-6873165_1280.jpg", 
    "https://cdn.pixabay.com/photo/2024/02/25/13/30/art-8595775_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/03/22/18/23/eurasian-blue-tit-7085704_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/08/18/14/52/maple-leaves-7395109_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/04/19/09/34/flower-7937334_1280.jpg",
    "https://media.istockphoto.com/id/155356833/photo/pink-cherry-blossoms.webp?s=2048x2048&w=is&k=20&c=8MQqlBk8_wdE9djKwNdeDSlJ805yliOZC_cqh1-1myY=",
    "https://cdn.pixabay.com/photo/2024/02/09/14/54/butterfly-8563213_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/01/23/16/21/peacock-flowers-6961319_960_720.jpg"
  ];

  return (
    <>
    <View style={{height:180, backgroundColor:'lightyellow'}}>
           
          
    <Text style={{fontSize:20,fontWeight:"bold", textAlign:'center',padding:10}}>
                This is a sasta App
              </Text>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      
    >
      
      {arr.map((value, index) => (
        <Image
          key={index}
          source={{ uri: value }}
          style={styles.image}
        />
      ))}
    </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal:1,
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
    outlineWidth: 5,
    outlineColor: 'lightblue',
    outlineOffset:2
  },
});

export default HorizontalImageScroll;
