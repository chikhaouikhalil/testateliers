import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';

const {width} = Dimensions.get('window');

const Badge = ({text}) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const [trails, setTrails] = useState([]);
  const [ateliers, setAteliers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigateHandler = () => navigation.navigate('Video');

  // GET DATA AND SET ATELIERS & TRAILS
  const fetchData = () => {
    setLoading(true);
    axios
      .get(URL)
      .then(res => {
        setAteliers(res.data.slice(0, 6));
        setTrails(res.data.slice(6, 12));
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // SPINNER
  if (loading) {
    return (
      <View
        style={[
          styles.container,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <ActivityIndicator size="large" color="#2d2d2d" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/** trails */}
      <View>
        <Text style={styles.label}>Trails</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {trails.map((at, i) => {
            return (
              <TouchableOpacity
                onPress={navigateHandler}
                style={styles.itemContainer}
                key={at.id}>
                <Image
                  style={styles.backgroundImage}
                  source={{
                    uri: 'https://images.pexels.com/photos/2682770/pexels-photo-2682770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  }}
                />
                <Text numberOfLines={2} style={styles.title}>
                  {at.title}
                </Text>
                <Badge text="Nouveau" />
                <View style={styles.circle} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/** Ateliers */}
      <View>
        <Text style={styles.label}>Ateliers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ateliers.map((at, i) => {
            return (
              <TouchableOpacity
                onPress={navigateHandler}
                style={styles.itemContainer}
                key={at.id}>
                <Image
                  style={styles.backgroundImage}
                  source={{
                    uri: 'https://images.pexels.com/photos/2682770/pexels-photo-2682770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  }}
                />
                <Text numberOfLines={2} style={styles.title}>
                  {at.title}
                </Text>
                <Badge text="Nouveau" />
                <View style={styles.circle} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    color: '#2d2d2d',
    paddingVertical: 10,
  },
  itemContainer: {
    width: width * 0.5,
    borderRadius: 10,
    overflow: 'hidden',
    height: width * 0.5 * 0.75,

    marginLeft: 10,
    paddingVertical: 10,
  },
  backgroundImage: {
    width: width * 0.5,
    height: width * 0.5 * 0.75,
    position: 'absolute',
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
    width: width * 0.5,
    position: 'absolute',
    bottom: 15,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    badgeText: '#000',
    position: 'absolute',
    right: 12,
    top: 12,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 100,
  },
  badgeText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#000',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginTop: 4,
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: 12,
  },
});
