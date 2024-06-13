import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Image, pickDocument, SafeAreaView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerButton} onPress={() => alert('Voltar')}>
        <Image style={styles.headerImage} source={require('./img/Voltar.png')} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Detalhes do Paciente</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.reportContainer}>
        <TextInput style={styles.inputBoxTiny} placeholder="Nome" multiline />
        <TextInput style={styles.inputBoxTiny} placeholder="Telefone" multiline />
        <TextInput style={styles.inputBoxTiny} placeholder="Email" multiline />
        <TextInput style={styles.inputBoxTiny} placeholder="CPF" multiline />
        <TextInput style={styles.inputBoxTiny} placeholder="Data de Nascimento" multiline />
        <TextInput style={styles.inputBoxTiny} placeholder="Profissão" multiline />
        <TextInput style={styles.inputBoxTiny} placeholder="Sexo" multiline />
        <TextInput style={styles.inputBoxTiny} placeholder="Estado Civil" multiline />
        <Text style={styles.submitMedicText}>Enviar Pedido Médico: </Text>
        <TouchableOpacity style={styles.fileButton} onPress={pickDocument}>
          <Image style={styles.submitImageEnvia} source={require('./img/Enviar.png')} />
        </TouchableOpacity>
        <View style={styles.submitButton}>
                  <Image style={styles.submitImage} source={require('./img/iesgo.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  submitMedicText:{
    fontSize: 15,
    marginTop: 30,

  },
  headerContainer: {
    backgroundColor: '#081478',
    padding: 40,
    marginLeft: -10,
    marginTop: -10,
    width: 400,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 70,
    marginTop: 15,
  },
  headerButton: {
    padding: 0,
    width: -2,
  },
  headerImage: {
    width: 20,
    height: 40,
    marginLeft: -20,
    marginTop: 10,
    marginBottom: -20,
  },
  reportContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 50,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  submitButton: {
    backgroundColor: '#081478',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginLeft: -10,
    marginRight: -10,
    marginBottom: -20,
    alignItems: 'center',
    marginTop: 30,
  },
  submitImage:{
    width: 170,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 10,
  },
  submitImageEnvia:{
    width: 40,
    height: 40,
    marginLeft: 230,
    marginTop: -35,
    marginBottom: 10,
  },
  inputBoxTiny:{
    marginTop: 0,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 10,
    height: 40,
    elevation: 30,
    alignContent: 'flex-start',
  }
});
