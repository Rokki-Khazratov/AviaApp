import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DUMMY_FLIGHTS = [
  {
    id: '1',
    number: 'TAS-MSK 234',
    departure: '14:30',
    arrival: '17:45',
    date: '2024-03-20',
    status: 'Предстоит',
  },
  // Add more dummy data
];

const ScheduleScreen = ({ navigation }) => {
  const renderFlightItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.flightCard}
      onPress={() => navigation.navigate('FlightDetail', { flightId: item.id })}
    >
      <Text style={styles.flightNumber}>{item.number}</Text>
      <Text style={styles.flightTime}>{item.departure} - {item.arrival}</Text>
      <Text style={styles.flightDate}>{item.date}</Text>
      <Text style={styles.flightStatus}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Расписание</Text>
      </View>
      <FlatList
        data={DUMMY_FLIGHTS}
        renderItem={renderFlightItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  listContent: {
    padding: 20,
  },
  flightCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  flightNumber: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  flightTime: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  flightDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  flightStatus: {
    fontSize: 14,
    color: '#007AFF',
  },
});

export default ScheduleScreen;
