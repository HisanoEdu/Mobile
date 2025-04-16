import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function MinhasCredenciais({ githubUser }) {
  const [curtido, setCurtido] = useState(false);

  const toggleCurtida = () => {
    setCurtido(!curtido);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://github.com/${githubUser}.png`,
          }}
        />
        <Text style={styles.username}>{githubUser}</Text>
      </View>

      <Image
        style={styles.mainImage}
        source={{
          uri: `https://github.com/${githubUser}.png`,
        }}
      />

      <TouchableOpacity onPress={toggleCurtida}>
        <AntDesign
          name={curtido ? "heart" : "hearto"}
          size={30}
          color={curtido ? "red" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const githubUsers = ['HisanoEdu', 'jamilyGomes', 'dev-rls', 'IgorBaez', 'DayFlowers'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {githubUsers.map((githubUser) => (
          <MinhasCredenciais key={githubUser} githubUser={githubUser} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  card: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  mainImage: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
});
