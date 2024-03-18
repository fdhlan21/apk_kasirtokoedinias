import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyButton, MyHeader, MyInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function Manajemen({navigation}) {
    const backPage = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
    {/* HEADERS */}
    <MyHeader onPress={backPage} judul="Manajemen"/>

    {/*  Main Content*/}
    <ScrollView>
    <View style={{padding:10, }}>

    {/* Search cari barang */}
    <MyInput placeholder="Cari barang"/>


    {/* DISINI AKAN MUNCUL TABEL PRODUKNYA, SELENGKAPNYA LIHAT FIGMA DAN DOKEMTASI */}
    
    </View>
    </ScrollView>

    </View>
  )
}