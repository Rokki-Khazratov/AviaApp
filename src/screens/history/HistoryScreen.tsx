import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HistoryScreen = ({ navigation }) => {
  const flightHistory = [
    {
      id: '1',
      number: 'TAS-MSK 234',
      date: '2024-03-15',
      departure: '14:30',
      arrival: '17:45',
      status: 'Выполнен',
    },
    {
      id: '2',
      number: 'MSK-TAS 235',
      date: '2024-03-14',
      departure: '09:30',
      arrival: '12:45',
      status: 'Выполнен',
    },
    // Добавьте больше рейсов здесь
  ];

  const renderFlightItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.flightCard}
      onPress={() => navigation.navigate('FlightDetail', { flightId: item.id })}
    >
      <View style={styles.flightHeader}>
        <Text style={styles.flightNumber}>{item.number}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.departure} - {item.arrival}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>История полетов</Text>
      </View>
      <FlatList
        data={flightHistory}
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
  flightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  flightNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  status: {
    fontSize: 14,
    color: '#007AFF',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    color: '#1a1a1a',
  },
});

export default HistoryScreen;
