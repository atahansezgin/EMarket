import 'react-native-gesture-handler/jestSetup';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('@gorhom/bottom-sheet', () => {
  const reactNative = jest.requireActual('react-native');
  const { View } = reactNative;

  return {
    __esModule: true,
    default: View,
    BottomSheetModal: View,
    BottomSheetModalProvider: View,
    BottomSheetFlatList: View,
    useBottomSheetModal: () => ({
      present: () => { },
      dismiss: () => { },
    }),
  };
});

jest.mock("react-native-ui-lib", () => {
  const reactNative = jest.requireActual('react-native');
  const { View } = reactNative;

  return {
    __esModule: true,
    default: View,
    RadioGroup: View,
    RadioButton: View
  };
});