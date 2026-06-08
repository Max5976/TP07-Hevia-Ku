import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Apellido, Apellido)</Text>
      </View>

      <Image source={require('./assets/Accenture.png')} style={styles.logo} />

      <View style={styles.containerLogin}>
        <TextInput placeholder="Email" placeholderTextColor="#999" style={styles.input}/>
        <TextInput placeholder="Contraseña" placeholderTextColor="#999" secureTextEntry style={styles.input}/>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mensaje}>
          <Text style={styles.mensajeTexto}>Olvidaste la clave?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mensaje}>
          <Text style={styles.mensajeTexto}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#dddddd',
    fontFamily: '',
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

  mensaje: {
    
  },

  mensajeTexto: {
    fontSize: 15,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 12,
  },

  logo: {
    width: 214,
    height: 56,
    alignSelf: 'center',
    marginTop: 60,
  },
});