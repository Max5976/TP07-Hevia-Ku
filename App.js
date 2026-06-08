import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState(''); //para ver si un mensaje es bueno o malo

  const login = () => {
    if (email.trim() === '' || contrasenia.trim() === '') {
      setMensaje("Por favor complete todos los campos");
      setTipoMensaje("error");
      return;
    }

    const emailCorrecto = "maximoH@gmail.com";
    const contraCorrecta = "15263748";

    if (email === emailCorrecto && contrasenia === contraCorrecta) {
      setMensaje("Ingreso exitoso - ¡Bienvenido!");
      setTipoMensaje("ok");
    } else {
      setMensaje("Usuario o contraseña incorrectos, vuelva a intentar");
      setTipoMensaje("error");
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Apellido, Apellido)</Text>
      </View>

      <Image source={require('./assets/Accenture.png')} style={styles.logo} />

      <View style={styles.containerLogin}>
        <TextInput 
          placeholder="Email" 
          placeholderTextColor="#999" 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
        />
        <TextInput 
          placeholder="Contraseña" 
          placeholderTextColor="#999" 
          secureTextEntry 
          style={styles.input}
          value={contrasenia}
          onChangeText={setContrasenia}
        />
        
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        {mensaje !== '' && (
          <Text
            style={[
              styles.mensajeTexto,
              tipoMensaje === 'ok' ? styles.ok : styles.error
            ]}
          >
            {mensaje}
          </Text>
        )}

        <TouchableOpacity style={styles.mensaje}>
          <Text style={styles.mensajeTexto}>Olvidaste la clave?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mensaje}>
          <Text style={styles.mensajeTexto}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#dddddd',
  },

  header: {
    paddingTop: 40,
    backgroundColor: '#6119e7',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  containerLogin: {
    flex: 0.87,
    padding: 20,
    justifyContent: 'center',
  },

  input: {
    fontSize: 16,
    width: '100%',
    height: 50,
    borderWidth: 1.4,
    borderColor: '#8a19e7',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
  },

  button: {
    marginTop: 18,
    backgroundColor: '#8a19e7',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },

  mensajeTexto: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 12,
  },

  ok: {
    color: "green",
    fontWeight: "bold",
  },

  error: {
    color: "red",
    fontWeight: "bold",
  },

  logo: {
    width: 214,
    height: 56,
    alignSelf: 'center',
    marginTop: 100,
  },
});
