import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BasketItem } from 'types';
import { styles } from './styles';

type BasketItemCardProps = {
  item: BasketItem;
  onIncrease: (item: BasketItem) => void;
  onReduce: (id: string) => void;
};

const BasketItemCard: React.FC<BasketItemCardProps> = ({ item, onIncrease, onReduce }) => {

  const onPressIncrease = () => {
    onIncrease(item);
  };

  const onPressReduce = () => {
    onReduce(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price} >{item.price}</Text>
      </View>
      <View style={styles.counter_container}>
        <TouchableOpacity testID='reduce-button' onPress={onPressReduce} style={styles.counter_button}>
          <Text>
            -
          </Text>
        </TouchableOpacity>
        <Text testID='count-label' style={styles.counter_label}>
          {item.count}
        </Text>
        <TouchableOpacity testID='increase-button' onPress={onPressIncrease} style={styles.counter_button}>
          <Text>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(BasketItemCard);