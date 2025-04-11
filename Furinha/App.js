import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


function MinhasCredenciais({ githubUser }) {
  return (
    <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
      <Image
        style={{
          marginRight: 15,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        source={{
          uri: `https://github.com/${githubUser}.png`, 
        }}
      />
      <AntDesign name="hearto" size={24} color="black" />
    </View>
  );
}

export default function App() {

  const githubUsers = ['HisanoEdu', 'jamilyGomes', 'dev-rls'];

  return (
    <View style={styles.container}>
      {githubUsers.map((githubUser) => (
        <MinhasCredenciais key={githubUser} githubUser={githubUser} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',  // Uncomment if you want to center content
    // justifyContent: 'center',  // Uncomment if you want to center content
  },
});
