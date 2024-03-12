import React from 'react';
import { View } from 'react-native';
import { StarIcon } from '@heroicons/react/24/solid';

const Difficulty = ({ rating }) => {
  const renderStars = (count, color) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<StarIcon key={i} height={24} color={color} />);
    }
    return stars;
  };

  let stars = null;
  switch (rating) {
    case 'beginner':
      stars = renderStars(1, '#22DD22');
      break;
    case 'intermediate':
      stars = renderStars(2, '#FFFF22');
      break;
    case 'expert':
      stars = renderStars(3, '#FF0000');
      break;
    default:
      break;
  }

  return <View style={{ flexDirection: 'row' }}>{stars}</View>;
};

export default Difficulty;
