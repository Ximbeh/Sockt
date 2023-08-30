import { StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Text, View, } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AVISO DE ESTOQUE</Text>

      <View style={{width: '100%', alignItems: 'center'}}>
        <TouchableOpacity style={styles.objeto}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>DOGÃO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.status}>
          <Text style={{ color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 10, marginRight: 30, marginLeft: 30,}}>STATUS: ACABANDO</Text>
          <Image
            source={require("../../assets/images/seta7.svg")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
            }}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.verMais}>
          <Text style={{ color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 9,}}>VER MAIS AVISOS</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 12,
    marginTop: 100,
  },
  objeto: {
    backgroundColor: '#40DE63',
    width: '70%',
    padding: 7,
    borderRadius: 20,
    marginTop: 50,

  },
  status: {
    backgroundColor: '#fff',
    width: '70%',
    padding: 7,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  verMais: {
    backgroundColor: '#40DE63',
    width: '30%',
    padding: 7,
    borderRadius: 20,
    marginTop: 20,

  },


});
