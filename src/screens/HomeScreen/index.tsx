import { InteractionManager, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ProductList from 'components/lists/ProductList';
import useProducts from 'hooks/useProducts';
import SearchInput from 'components/inputs/SearchInput';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import FilterModal from 'components/modals/FilterModal';
import CustomButton from 'components/buttons/CustomButton';
import { styles } from './styles';

const HomeScreen = () => {
  const { data, fetchProducts, search, onSearch, onFavorite, onClearFilter, onFilter, isFiltered } = useProducts();

  useFocusEffect(React.useCallback(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      fetchProducts();
    });

    return () => {
      task.cancel();
    };
  }, []));

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View>
          <SearchInput searchValue={search} onSearch={onSearch} />
          <View style={styles.filter_container}>
            {isFiltered && <CustomButton label='ClearFilter' onPress={onClearFilter} />}
            <CustomButton style={styles.filter_button} label='Filter' onPress={handlePresentModalPress} />
          </View>
        </View>
        <ProductList
          data={data}
          onFavorite={onFavorite}
        />
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={["100%"]}
      >
        <FilterModal onFilter={onFilter} onClose={closeModal} />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default HomeScreen;