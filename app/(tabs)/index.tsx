import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//hooks
export default function ContadorSimples() {
  // Estado para armazenar o valor do contador
  const [contador, setContador] = useState(0);

  // Funções para manipular o contador usando declaração de função normal
  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  function resetar() {
    setContador(0);
  }
  function mensagemReset(){
    return "Contador resetado!";
  }
    function mensagemaumentar(){
    return "Contador Incrementado!";
  }
    function mensagemDiminuir(){
    return "Contador Diminuido!";
  }

  return (
    <View style={styles.container}>
      {/* Título do App */}
      <Text style={styles.titulo}>Contador App</Text>

      <View style={styles.contador}>
      {/* Valor do Contador */}
      <Text style={styles.textContador}>{contador}</Text>
      </View>
      <View style={styles.textMensagem}>
      {/* Mensagem de feedback */}
          <Text>{contador === 0 ? mensagemReset() : contador > 0 ? mensagemaumentar() : mensagemDiminuir()}</Text>
      </View>

      {/* Botões de Controle */}
      <View style={styles.botoes}>
          <TouchableOpacity style={[styles.botao, styles.botaoMenos]} onPress={diminuir}>
            <Text style={styles.textBotao}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.botaoReset]} onPress={resetar}>
            <Text style={styles.textBotao}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.botaoMais]} onPress={aumentar}>
            <Text style={styles.textBotao}>+</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    color: '#333',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  contador: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContador: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textMensagem: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    color: '#333',
  },
  botoes: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  botao: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
   },
  botaoMenos: {
    backgroundColor: '#FF6B6B',
   },
  botaoReset: {
    backgroundColor: '#4ECDC4',
   },
  botaoMais: {
    backgroundColor: '#5AC9A5',
   },
   textBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
   }
  
});
