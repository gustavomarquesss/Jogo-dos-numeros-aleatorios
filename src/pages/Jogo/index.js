import { View, Text, Image, Button } from 'react-native'
import {useState} from 'react'
import {styles} from './styles'

function Jogo(){

  const [numero, setNumero] = useState('?')

  function gerarNumero(){
    setNumero(Math.floor(Math.random() * 11))
  }

  return(
    <View>
      <Text style={styles.titulo}>Jogo do Número Aleatorio</Text>

      <View style={styles.posicionamento_imagem}>
        <Image 
          source={{uri: 'https://pm1.aminoapps.com/6703/6eb2d6feb2e955f94c433879ffb186d54364c60b_00.jpg'}}
          style={styles.imagem}
        />
      </View>

      <Text style={styles.frase}>Pense em um número de 0 a 10</Text>

      <Text style={styles.numero}>{numero}</Text>

      <Button color='green' title='Descobrir' onPress={gerarNumero}/>
    </View>
  )
}

export default Jogo