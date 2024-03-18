import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyButton, MyHeader, MyInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function LihatTransaksi({navigation}) {
    const backPage = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
    {/* HEADERS */}
    <MyHeader onPress={backPage} judul="Lihat Transaksi"/>

    {/*  Main Content*/}
    <ScrollView>
    <View style={{padding:10, }}>

    {/* DISINI AKAN MUNCUL BARANG BARANG YANG SUDAH DI PESAN DI TRANSAKSI TADI, AKAN ADA JUMLAH DI PESANNYA BERAPA PCS DAN NANTI AKAN KELUAR
    TOTALNYA JADI BERAPA, SELENGKAPNYA LIAT DI FIGMA DAN DOKUMENTASI */}

    </View>
    </ScrollView>
    {/* ADA TOMBOL SIMPAN DI SINI */}
    {/*NANTI AKAN MENGARAH KE PAGE STRUCK */}
    <MyButton onPress={() => navigation.navigate('StruckTransaksiPage')} title="Lanjutkan Transaksi"/>
    </View>
  )
}