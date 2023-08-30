import { StyleSheet, Image, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function EditarTwo() {
  return (
    <View style={styles.container}>
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

      <View style={{marginTop: 50, flexDirection: 'row', marginBottom: 30,}}>
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
      <ScrollView>
      <View >
      <View style={{marginTop: 10, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/cartao-de-visitas.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold'}}>Nome</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/registrado.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10,}}>Marca</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/calendario.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10,}}>Marca</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/documento.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10, marginRight: 15,}}>Caracteristicas do patrimônio?Ex:Placa do automovel e numero de chassi.</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/simbolo-do-dolar.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10, marginRight: 15,}}>Valor que foi adquirido por UNIDADE</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/definicao-do-tipo-de-documento.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10, marginRight: 15,}}>Tipo de produto? Ex:Escritório,automóvel</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/atencao.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10, marginRight: 15,}}>Caracteristicas do produto?Ex:Defeito</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/coracao.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10, marginRight: 15,}}>Doação de outra instituição?Qual?</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/codigo-binario.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10, marginRight: 15,}}>Código da licitação.Ex:18368297</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/hipoteca.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10, marginRight: 15,}}>Código do patrimônio.Ex:FGH-178</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
        
      </View>
      <View >
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#40DE63', borderRadius: 50, width: 50, height: 38, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 20,}}>
        <Image
              source={require("../../assets/images/mala-de-viagem.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
        </TouchableOpacity>
        <View style={{ width: 200, backgroundColor: '#fff', borderRadius: 20, padding: 10, flexDirection: 'row', position: 'relative', justifyContent: 'center'}}>
              <Text style={{color: '#888', fontWeight: 'bold', fontSize: 10, marginRight: 15,}}>Setor Destinado</Text>
              <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
              }}
            />
        
        </View>
      </View>
      </View>
      <View style={{position: 'relative', justifyContent: 'center', marginTop: 50,}}>
        <Image
                source={require("../../assets/images/tv.png")}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                  marginLeft: '27%'
                }}
              />

        <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
                bottom: 180,
              }}
            />
            
        <Text style={{marginTop: 20, backgroundColor: '#40DE63', borderRadius: 50, padding: 5, textAlign: 'center'}}>Ver Imagem Inteira</Text>
      </View>
      <View style={{position: 'relative', justifyContent: 'center', marginTop: 50,}}>
        <Image
                source={require("../../assets/images/pdf.png")}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                  marginLeft: '27%'
                }}
              />

        <Image
              source={require("../../assets/images/caneta.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                position: 'absolute',
                right: 10,
                bottom: 180,
              }}
            />
            
        <Text style={{marginTop: 20, backgroundColor: '#40DE63', borderRadius: 50, padding: 5, textAlign: 'center'}}>Ver documento</Text>
      </View>
      <Text style={{marginTop: 20, backgroundColor: '#40DE63', borderRadius: 50, padding: 15, textAlign: 'center', fontSize: 16}}>Salvar alterações</Text>
      <Text style={{marginTop: 20, backgroundColor: '#40DE63', borderRadius: 50, padding: 15, textAlign: 'center', fontSize: 16, marginBottom: 50,  }}>Voltar a tela inicial</Text>

      </ScrollView>

      <View style={{marginTop: 10, width: '65%'}}>
       
        
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
    flexDirection: 'column',
    alignItems: 'center'

  }
});
