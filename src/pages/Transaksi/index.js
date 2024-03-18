import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyButton, MyHeader, MyInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function Transaksi({navigation}) {
    const backPage = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
    {/* HEADERS */}
    <MyHeader onPress={backPage} judul="Transaksi"/>

    {/*  Main Content*/}
    <ScrollView>
    <View style={{padding:10, }}>

    {/* Search cari barang */}
    <MyInput placeholder="Cari barang"/>

    {/* NANTI BARANGNYA MUNCUL DI SINI */}
    {/* MASUKAN BARANGNYA DISIHI, SELENGKAPNYA LIHAT FIGMA DAN DOKEMTASI */}
    
    </View>
    </ScrollView>
    {/* ADA TOMBOL SIMPAN DI SINI */}
    {/*NANTI AKAN MENGARAH KE PAGE LIHAT TRANSAKSI */}
    <MyButton onPress={() => navigation.navigate('LihatTransaksiPage')} title="Simpan"/>
    </View>
  )
}