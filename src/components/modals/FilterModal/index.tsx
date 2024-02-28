import { ListRenderItem, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import { useAppSelector } from 'store';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Checkbox, RadioButton, RadioGroup } from 'react-native-ui-lib';
import { Filter, SortType } from 'types/Filter';
import CustomButton from 'components/buttons/CustomButton';
import { styles } from './styles';

type FilterModalProps = {
  onClose: () => void,
  onFilter: (filter: Filter) => void;
};

const FilterModal: FC<FilterModalProps> = ({ onClose, onFilter }) => {
  const { brands, models } = useAppSelector(state => state.product);
  const [sortType, setSortType] = useState<SortType>();
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModel] = useState<string[]>([]);

  const onSelectBrand = (item: string, value: boolean) => {
    if (value) {
      setSelectedBrands(prev => [...prev, item]);
    } else {
      setSelectedBrands(prev => prev.filter(brand => brand != item));
    }
  };

  const onSelectModel = (item: string, value: boolean) => {
    if (value) {
      setSelectedModel(prev => [...prev, item]);
    } else {
      setSelectedModel(prev => prev.filter(brand => brand != item));
    }
  };

  const onSubmit = () => {
    onFilter({
      sortType,
      brands: selectedBrands,
      models: selectedModels
    });
    onClose();
  };

  const keyExtractor = (item: string, index: number) => `${index}_${item}`;

  const renderBrand: ListRenderItem<string> = ({ item }) => {
    return (
      <Checkbox value={selectedBrands.includes(item)} label={item} onValueChange={value => onSelectBrand(item, value)} />
    );
  };

  const renderModel: ListRenderItem<string> = ({ item }) => {
    return (
      <Checkbox value={selectedModels.includes(item)} label={item} onValueChange={value => onSelectModel(item, value)} />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter</Text>
      <View style={styles.field}>
        <Text style={styles.title} >Sort By</Text>
        <RadioGroup onValueChange={setSortType}>
          <RadioButton label='Old to new' value={SortType.OLD_TO_NEW} />
          <RadioButton label='New to old' value={SortType.NEW_TO_OLD} />
          <RadioButton label='Price high to low' value={SortType.PRICE_HIGH_TO_LOW} />
          <RadioButton label='Price low to hight' value={SortType.PRICE_LOW_TO_HIGH} />
        </RadioGroup>
      </View>
      <View style={styles.field}>
        <Text style={styles.title} >Brand</Text>
        <BottomSheetFlatList
          data={brands}
          keyExtractor={keyExtractor}
          renderItem={renderBrand}
          style={{ flex: 1 }}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.title} >Model</Text>
        <BottomSheetFlatList
          data={models}
          keyExtractor={keyExtractor}
          renderItem={renderModel}
          style={{ flex: 1 }}
        />
      </View>
      <CustomButton onPress={onSubmit} label='Filter' />
    </View>
  );
};

export default FilterModal;