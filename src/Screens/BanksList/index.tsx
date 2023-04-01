import React from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import ListCard from '../../Components/ListCard'
import { useData } from '../../hooks/useData'
import { Bank } from '../../interfaces/interfaces'



export default function BanksList(): JSX.Element {

  const {data,error,loading} = useData({
    url: "https://dev.obtenmas.com/catom/api/challenge/banks"
  })

  return (
    <SafeAreaView style={styles.safeContainer}>
      {
        loading ? 
        <ActivityIndicator size="large" />
        : error ? 
        <Text>Error al consultar los datos</Text>
        :
        <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Consulta de Bancos</Text>
        </View>
          <ScrollView style={styles.scrollContainer}>
            {data.map((bank: Bank) => {
              return(
                <ListCard key={bank.bankName} bank={bank} />
              )
            })}
          </ScrollView>
        </View>
      }
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
safeContainer: {
    flex: 1, 
    justifyContent:"center", 
    alignItems:"center", 
    backgroundColor:"#24AADC"
  },
  container: {
    flex:1,  
    width: "100%"
  },
  title: {
    flex:0.3, 
    justifyContent:"center", 
    alignItems: "center"
  },
  textTitle: {
    fontSize: 35, 
    fontWeight:"bold", 
    color:"white"
  },
  scrollContainer: {
    flex:1,
    marginHorizontal: 10
  }
});