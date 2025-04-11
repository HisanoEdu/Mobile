import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView,Button  } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'; 

export default function App() {
  const handlePress = () => {
    alert('Você clicou no botão!')
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.instagramCard}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://avatars.githubusercontent.com/u/179962454?v=4' }} style={styles.profilePic}/>
          <Text style={styles.username}>IgorBaez</Text>
        </View>
        <Image source={{ uri: 'https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.instagramImage}/>
        <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>


        <View style={styles.header}>
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/181283602?v=4' }} style={styles.profilePic}
            />
            <Text style={styles.username}>dev-rls</Text>
        </View>
          <Image source={{ uri: 'data:image/jpeg;base64,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' }} 
          style={styles.instagramImage}/>
         <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>


        <View style={styles.header}>
        <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/180126607?v=4' }} 
            style={styles.profilePic}/>
            <Text style={styles.username}>HisanoEdu</Text>
        </View>
          <Image 
          source={{ uri: 'https://animenew.com.br/wp-content/uploads/2024/12/Anime-Jujutsu-Kaisen-1.webp' }} 
          style={styles.instagramImage} />
         <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>


        <View style={styles.header}>
        <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/181283441?v=4' }} 
            style={styles.profilePic}
            />
            <Text style={styles.username}>JamilyGomes</Text>
        </View>
          <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PRgZ4c5sOC2Y4cFN9sHD1nd7Xn1CPOpWNA&s' }} 
          style={styles.instagramImage} 
        />
         <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>


         <View style={styles.header}>
        <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/180126607?v=4' }} 
            style={styles.profilePic}
            />
            <Text style={styles.username}>HisanoEdu</Text>
        </View>
        <Image 
          source={require('./Image/maomao.jpg')} 
          style={styles.instagramImage} />
        <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Button
         title='Clicar'
         onPress={handlePress}
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  instagramCard: {
    width: 300, // Largura fixa para o post
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra no Android
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16, // Circular
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  instagramImage: {
    width: '100%', // Preenche a largura do card
    height: 300, // Altura fixa para a imagem
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginRight: 15,
  },
  likes: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  caption: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 14,
  },
});