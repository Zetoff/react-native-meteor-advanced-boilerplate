import React from 'react';
import { Image, View } from 'react-native';
import gravatar from 'gravatar-api';
import images from '../../config/images';
import styles from './styles';

const Avatar = props => {
  const gravatarOptions = {
    email: props.email,
    parameters: { size: 200 },
  };

  const uri = gravatar.imageUrl(gravatarOptions);
  return (
    <Image
      style={[styles.avatar, props.style]}
      source={{ uri }}
      defaultSource={images.avatarPlaceholder}
    />
  );
};

Avatar.propTypes = {
  email: React.PropTypes.string,
  style: View.propTypes.style,
};

export default Avatar;
