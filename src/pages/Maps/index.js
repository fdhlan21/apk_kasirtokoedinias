import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import { MyDimensi, colors, fonts } from '../../utils'

export default function Maps() {
  return (

    // INI MASIH MAPS DUMMY , BAGIAN BACKEND UNTUK MAPS NYA
    <View style={{flex:1, backgroundColor:colors.white}}>
       <ImageBackground source={require('../../assets/mapsthemplate.png')} style={{
                    flex:1,
                    height:'100%',
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:colors.danger,

                   }}>

                   <Image source={require('../../assets/indikatoraqi.png')} style={{
                    height:150, width:150, marginTop:'40%'

                   }}/>
               <View style={{padding:10,
backgroundColor:colors.white,
borderRadius:10,
marginTop:'60%'

}}>
{/* MASUKAN LOKASI TEMPAT DISINI */}

<View style={{flexDirection:'row', }}>
<Image source={require('../../assets/kordinat.png')} style={{
  height:21, width:21,
}}/>
<Text style={{fontFamily:fonts.primary[600], left:10}}>Kota Bandung</Text>

</View>
<View style={{padding:1, backgroundColor:colors.black, marginTop:10}}></View>

{/* Outdoor Conditions
    Terdapat informasi mengenai kondisi udara terkini sesuai dengan lokasi saat ini. Berisi:
    > Lokasi
    > Kondisi Kualitas Udara, misalnya: Kurang Sehat
    > AQI
    > PM2.5
 */}



<Text  style={{fontFamily:fonts.primary[800], fontSize:MyDimensi/2.5, color:colors.secondary,}}>Kurang Sehat</Text>
<View style={{flexDirection:"row", }}>

<Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/6.9, color:"gray" }}>Beberapa orang mungkin sensitif{'\n'}20 rb mengikuti</Text>

<View style={{left:0, flexDirection:"row"}}>
  <Image source={require('../../assets/indikatoraqi.png')} style={{
    width:80,
    height:80,

  }}/>
   <Image source={require('../../assets/indikatorpm.png')} style={{
    width:80,
    height:80,
    left:10,

  }}/>
</View>

</View>
</View>
                   </ImageBackground> 
    </View>
  )
}