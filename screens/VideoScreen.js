import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoComponent from '../components/VideoComponent';

const VideoScreen = ({history}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> La prévention ! A quoi ça sert ?</Text>
      <VideoComponent history={history} />
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 16,
    color: '#3d3d3d',
  },
});
