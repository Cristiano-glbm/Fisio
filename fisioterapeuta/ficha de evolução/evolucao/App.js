import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerButton} onPress={() => alert('Voltar')}>
        <Image style={styles.headerImage} source={require('./img/Voltar.png')} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Ficha de Evolução</Text>
    </View>
  );
};

export default function App() {
  const [isFisioterapeutaChecked, setIsFisioterapeutaChecked] = useState(false);
  const [isCoordenadorChecked, setIsCoordenadorChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.reportContainer}>
        <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
        <TextInput style={styles.inputBoxTiny} placeholder="Nome" />
        <TextInput style={styles.inputBoxTiny} placeholder="Email" />
        <TextInput style={styles.inputBoxTiny} placeholder="Tratamento" />
        <TextInput style={styles.inputBox} placeholder="Evolução" multiline />
        <View style={styles.checkboxContainer}>
          <CheckBox 
            checked={isFisioterapeutaChecked}
            onPress={() => setIsFisioterapeutaChecked(!isFisioterapeutaChecked)}
          />
          <Text style={styles.checkboxLabel}>Assinatura do Fisioterapeuta</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox 
            checked={isCoordenadorChecked}
            onPress={() => setIsCoordenadorChecked(!isCoordenadorChecked)}
          />
          <Text style={styles.checkboxLabel}>Assinatura do Coordenador</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={() => alert('Relatório enviado!')}>
          <Text style={styles.submitButtonText}>Enviar Ficha de Evolução</Text>
          <Image style={styles.submitImage} source={require('./img/send.png')} />
        </TouchableOpacity>
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
  headerContainer: {
    backgroundColor: '#081478',
    paddingVertical: 35,
    paddingHorizontal: 10,
    width: 400,
    marginLeft: -10,
    marginTop: -10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  headerButton: {
    padding: 10,
  },
  headerImage: {
    width: 20,
    height: 30,
  },
  reportContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  dateText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputBox: {
    paddingVertical: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignItems: 'baseline',
  },
  inputBoxTiny: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: -20,
  },
  checkboxLabel: {
    marginLeft: 0,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#081478',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    width: 337,
    marginLeft: -20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: -20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  submitImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
