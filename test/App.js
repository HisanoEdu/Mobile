import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const handlePress = () => {
    alert('Você clicou no botão!');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Card 1 */}
        <View style={styles.instagramCard}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://avatars.githubusercontent.com/u/179962454?v=4' }}
              style={styles.profilePic}
            />
            <Text style={styles.username}>IgorBaez</Text>
          </View>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
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

          {/* Card 2 */}
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://avatars.githubusercontent.com/u/181283602?v=4' }}
              style={styles.profilePic}
            />
            <Text style={styles.username}>dev-rls</Text>
          </View>
          <Image
            source={{ uri: 'data:image/jpeg;base64,...' }} // Substituir por uma base64 válida ou imagem URL
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

          {/* Card 3 */}
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://avatars.githubusercontent.com/u/180126607?v=4' }}
              style={styles.profilePic}
            />
            <Text style={styles.username}>HisanoEdu</Text>
          </View>
          <Image
            source={{ uri: 'https://animenew.com.br/wp-content/uploads/2024/12/Anime-Jujutsu-Kaisen-1.webp' }}
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

          {/* Card 4 */}
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

          {/* Card 5 - Imagem local */}
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://avatars.githubusercontent.com/u/180126607?v=4' }}
              style={styles.profilePic}
            />
            <Text style={styles.username}>HisanoEdu</Text>
          </View>
          <Image
            source={require('./assets/maomao.jpg')} // Coloque a imagem em "assets/maomao.jpg"
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

          <Button title="Clicar" onPress={handlePress} />
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
  instagramCard: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  instagramImage: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginRight: 15,
  },
});
