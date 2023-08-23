import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Alert
} from 'react-native';
import React, { useEffect, useState } from 'react';
import data from '../../utils/jsonData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { TextInput } from 'react-native-gesture-handler';

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [inventories, setInventories] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [productData, setProductData] = useState({
    product_id: '',
    product_name: '',
    vendor: '',
    mrp: '',
    batch_num: '',
    batch_date: '',
    quantity: '',
    status: ''
  });
  useEffect(() => {
    const getInventories = async () => {
      const invent = await JSON.parse(
        await AsyncStorage.getItem('inventories'),
      );
      setInventories(invent);
    };
    getInventories();
  }, []);
  console.log(inventories, 'gsdgsr');

  if (loader) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  const handleInputChange = (field, value) => {
    setProductData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    await AsyncStorage.setItem('inventories', JSON.stringify([...inventories, productData]));
    setInventories([...inventories, productData])
    setProductData({
      product_id: '',
      product_name: '',
      vendor: '',
      mrp: '',
      batch_num: '',
      batch_date: '',
      quantity: '',
      status: ''
    });
    onClose();
  };

  const onClose = () => {
    setVisible(false)
  }

  const handleModal = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    console.log("+++++++_+_+_+")
    if (user.roles === "dm") {
      Alert.alert("You are not able to change the status. For that You have to change your role")
      return
    } else {
      setVisible(true)
    }
  }

  return (
    <View>
      <View style={styles.addInvent}>
        <Button text="Add Inventories" style={{ width: '50%' }} onPress={handleModal} />
      </View>
      <FlatList
        data={inventories}
        style={{ marginBottom: 100 }}
        renderItem={({ item }) => {
          return <Card item={item} setInventories={setInventories} />;
        }}
      />
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
            <TextInput
              placeholder="Product ID"
              placeholderTextColor="gray"
              value={productData.product_id}
              onChangeText={text => handleInputChange('product_id', text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="Product Name"
              placeholderTextColor="gray"
              value={productData.product_name}
              onChangeText={text => handleInputChange('product_name', text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="Vendor"
              placeholderTextColor="gray"
              value={productData.vendor}
              onChangeText={text => handleInputChange('vendor', text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="MRP"
              placeholderTextColor="gray"
              value={productData.mrp}
              onChangeText={text => handleInputChange('mrp', text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="BATCH NUM"
              placeholderTextColor="gray"
              value={productData.batch_num}
              onChangeText={text => handleInputChange('batch_num', text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="BATCH DATE"
              placeholderTextColor="gray"
              value={productData.batch_date}
              onChangeText={text => handleInputChange('batch_date', text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="QUANTITY"
              placeholderTextColor="gray"
              value={productData.quantity}
              onChangeText={text => handleInputChange('quantity', text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="STATUS"
              placeholderTextColor="gray"
              value={productData.status}
              onChangeText={text => handleInputChange('status', text)}
              style={styles.inputField}
            />
            {/* Add similar TextInputs for other fields */}
            <Button text="Submit" onPress={handleSubmit} />
            <Button text="Close" onPress={onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  addInvent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  inputField: { color: 'black', borderWidth: 1, marginVertical: 4 },
  button: {
    color: 'white',
  }
});
