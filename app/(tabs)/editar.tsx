import { StyleSheet, Image, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function TabTwoScreen() {

  const navigation = useNavigation();
  
  const handleItemPress = () => {
    navigation.navigate('EditarTwo');
  };
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
              source={require("../../assets/images/editar4.png")}
              style={{
                width: 45,
                height: 45,
                resizeMode: "contain",
                marginRight: 30,
                marginLeft: 30,
              }}
            />
        <Text style={styles.title}>Editar</Text>

      </View>

      <View style={{marginTop: 50, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/buscar.svg")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <TextInput placeholder="Pesquisar" style={{ width: '80%', backgroundColor: '#fff', borderRadius: 20, padding: 10, textAlign: 'center', color: '#888', fontWeight: 'bold' }}></TextInput>
      </View>

      <View style={{marginTop: 10, width: '65%'}}>
        <TouchableOpacity onPress={handleItemPress} style={{backgroundColor: '#fff', flexDirection: 'row', padding: 5, borderRadius: 20, marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 10, fontWeight: 'bold', marginLeft: 10,}}>1 UN TESOURA - GERÊNCIA DE ORÇAMENTO</Text>
          <Image source={require("../../assets/images/seta7.svg")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleItemPress} style={{backgroundColor: '#fff', flexDirection: 'row', padding: 5, borderRadius: 20, marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 10, fontWeight: 'bold', marginLeft: 10,}}>2 NOTEBOOK DELL 16 GB - GER.FOLHA DE PAG</Text>
          <Image source={require("../../assets/images/seta7.svg")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleItemPress} style={{backgroundColor: '#fff', flexDirection: 'row', padding: 5, borderRadius: 20, marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 10, fontWeight: 'bold', marginLeft: 10,}}>1 UN TESOURA - GERÊNCIA DE ORÇAMENTO</Text>
          <Image source={require("../../assets/images/seta7.svg")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleItemPress} style={{backgroundColor: '#fff', flexDirection: 'row', padding: 5, borderRadius: 20, marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 10, fontWeight: 'bold', marginLeft: 10,}}>2 NOTEBOOK DELL 16 GB - GER.FOLHA DE PAG</Text>
          <Image source={require("../../assets/images/seta7.svg")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleItemPress} style={{backgroundColor: '#fff', flexDirection: 'row', padding: 5, borderRadius: 20, marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 10, fontWeight: 'bold', marginLeft: 10,}}>1 UN TESOURA - GERÊNCIA DE ORÇAMENTO</Text>
          <Image source={require("../../assets/images/seta7.svg")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleItemPress} style={{backgroundColor: '#fff', flexDirection: 'row', padding: 5, borderRadius: 20, marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 10, fontWeight: 'bold', marginLeft: 10,}}>2 NOTEBOOK DELL 16 GB - GER.FOLHA DE PAG</Text>
          <Image source={require("../../assets/images/seta7.svg")}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'

  }
});
