import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyButton, MyHeader, MyInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function StruckTransaksi({navigation}) {
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


   {/* NANTI DI HALAMAN INI SEPERTI BERUPA STRUCK GITU, ADA KODE PESANAN DAN TANGGAL PESANNYA,
   KEMUDIAN ADA TOTALNYA, DAN ADA KEMBALIANNYA, SELENGKAPNYA LIAT DI FIGMA DAN DOKEMENTASI */}
    
    </View>
    </ScrollView>
    {/* ADA TOMBOL SIMPAN DI SINI */}
    {/*NANTI AKAN MENGARAH KE PAGE LIHAT TRANSAKSI */}
    <MyButton title="Cetak dan Bayar"/>
    </View>
  )
}