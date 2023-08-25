import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addImage} from '../../redux/slices/imagesSlice';

const CameraExample = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();
  const store = useSelector(state => state.images);
  console.log(store, 'stre');

  const selectImageFromCamera = async () => {
    await launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
        maxWidth: 800,
        maxHeight: 800,
      },
      response => {
        if (!response.didCancel && !response.error) {
          dispatch(addImage({uri: response.assets[0].uri}));
        }
      },
    );
  };

  const selectImageFromLibrary = async () => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        maxWidth: 800,
        maxHeight: 800,
      },
      response => {
        if (!response.didCancel && !response.error) {
          dispatch(addImage(response.assets[0]));
        }
      },
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Button
        color={'orange'}
        title="Select Image from Camera"
        onPress={selectImageFromCamera}
      />
      <Button
        title="Select Image from Library"
        onPress={selectImageFromLibrary}
      />
    </View>
  );
};

export default CameraExample;
