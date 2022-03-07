import React, {useCallback} from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoComponent = ({history}) => {
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      history.goBack();
    }
  }, []);

  return (
    <View style={{marginHorizontal: 10, paddingVertical: 20}}>
      <YoutubePlayer
        height={'100%'}
        play={true}
        videoId={'S1C1TZ_oGLg'}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default VideoComponent;
