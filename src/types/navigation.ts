import { NativeStackNavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
  FlightDetail: { flightId: string };
  Finance: undefined;
  EmployeeDetail: { employeeId: string };
  History: undefined;
  Settings: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps = {
  navigation: NavigationProps;
}; 