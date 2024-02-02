import React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import ProductItem from '../components/ProductItem';
import Seprator from '../components/Seprator';

//data
import {PRODUCT_LIST} from '../constants';

type HomeProps = NativeStackScreenProps<RootStackPramList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCT_LIST}
        keyExtractor={item => item?.id?.toLocaleString()}
        ItemSeparatorComponent={Seprator}
        renderItem={({item}) => (
          <Pressable
            key={item?.id}
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
