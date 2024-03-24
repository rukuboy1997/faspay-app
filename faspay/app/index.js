import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Inputs from './Inputs.js';
import { Link } from 'expo-router';

const openURL = async (url) => {
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" or "https" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};


export default function Login() {
  return (
          <View style={styles.container}>
          <Image source={require('/data/data/com.termux/files/home/faspay-app/faspay/assets/fas-world.png')} style={{width:70, height:70}} />
          <Image source={require('/data/data/com.termux/files/home/faspay-app/faspay/assets/fas-font.png')} style={{width:200, height:100}}/>
	  <Text>{"\n"}</Text>
          <Inputs />
	  <Text>{"\n"}</Text>
	  <Text style = { styles.textColor }>
	  <Link href="/home">Click to view the Demo App</Link></Text>
	  <Text>{"\n"}</Text>
	  <Text>{"\n"}</Text>
	  <TouchableOpacity onPress={() => openURL('https://faspay.42web.io')} style={ styles.submitButton }>
	  <Text style={ styles.submitButtonText}>
	  Visit FasPay Landing Page
      </Text>
	  </TouchableOpacity>
          <StatusBar style="auto" />
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
    submitButton: {
        backgroundColor: '#228b22',
        padding: 5,
        margin: 10,
        height: 40,
        width: 250,
        borderRadius: 5,
	justifyContent: 'center',
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
	textDecorationLine: 'underline',
    },
    textColor: {
        color: '#0040FF',
	textDecorationLine: 'underline',
	fontWeight: 'bold',
    },
});
