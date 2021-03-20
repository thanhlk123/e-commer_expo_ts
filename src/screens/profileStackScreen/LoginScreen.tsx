import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen')

export default class LoginScreen extends React.Component {

  _handleGoogleLogin = async () => {
    try {
      const { type, user, idToken, accessToken } = await Google.logInAsync({
        androidStandaloneAppClientId: '208098970743-e8442r8frk3vhbcjja5jg4fqa0ivn326.apps.googleusercontent.com',
        iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
        androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
        iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
      switch (type) {
        case 'success': {
          //////////////////////////////////
          console.log(uset)
          console.log('success')
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Tính năng đang bảo trì. Vui lòng thử lại sau',
          );
          break;
        }
        default: {
          Alert.alert(
            'Tính năng đang bảo trì. Vui lòng thử lại sau',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Tính năng đang bảo trì. Vui lòng thử lại sau',
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={require('../images/loginPage/login2.jpg')}
            style={{ width: width, height: height * 0.5 }}
            resizeMode='contain'
          />
          <View style={{ height: '50%', alignItems: 'center' }}>

            <TouchableOpacity
              onPress={this._handleGoogleLogin}>
              <View style={[{ width: 300, height: 40, flexDirection: 'row', backgroundColor: '#1325ab', padding: 5, borderRadius: 5, margin: 5, alignItems: "center" }, styles.shadow]}>
                <View style={[{ width: 33, height: 33, backgroundColor: 'white', marginRight: 10  }, styles.centerItem]}>
                  <Image source={require('../images/loginPage/loginGG.png')}
                    style={{ width: 20, height: 20 }}
                    resizeMode='contain' />
                </View>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Sign in with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('RegisterScreen')}>
              <View style={[{ width: 300, height: 40, flexDirection: 'row', backgroundColor: '#48cfad', padding: 5, borderRadius: 5, margin: 5, alignItems: "center" }, styles.shadow]}>
                <View style={[{ width: 33, height: 33, backgroundColor: 'white', marginRight: 10 }, styles.centerItem]}>
                  <Image source={require('../images/loginPage/phonenumber.png')}
                    style={{ width: 20, height: 20 }}
                    resizeMode='contain' />
                </View>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Sign in with phone number</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', width:300, justifyContent:"flex-end" }}>
              <TouchableOpacity>
                <View style={[styles.centerItem]}>
                  <Text style={styles.loginText}>Reset or create account</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    width: 0.5 * width, height: 25
  },
  borderRight: {
    borderRightColor: 'grey',
    borderRightWidth: 2
  },
  header: {
    width: width,
    height: 24,
    backgroundColor: "#3b5f8a"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  loginText: {
    color: 'gray',
  }
});
