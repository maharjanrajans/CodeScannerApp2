/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const App = () => {
  const [scannedCodes, setScannedCodes] = useState('');

  const onSuccess = e => {
    console.log(e);
    setScannedCodes(e.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={100}
        showMarker={true}
        containerStyle={styles.qrContainer}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topViewStyle={styles.topContainer}
        bottomViewStyle={styles.bottomContainer}
        bottomContent={
          <ScrollView contentContainerStyle={styles.codeConatiner}>
            <Text style={styles.buttonText}>Scanned Code:</Text>
            <Text style={styles.buttonText}>{scannedCodes}</Text>
          </ScrollView>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 0,
  },
  bottomContainer: {
    flex: 1,
    padding: 20,
  },
  codeConatiner: {
    flex: 1,
    marginTop: 50,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    padding: 10,
    fontSize: 18,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default App;
