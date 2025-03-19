import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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