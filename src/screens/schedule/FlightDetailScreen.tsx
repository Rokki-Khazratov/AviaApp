import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../../components/common/BackButton';

type FlightDetailScreenProps = {
  navigation: any;
  route: {
    params: {
      flightId: string;
    };
  };
};

const FlightDetailScreen = ({ route }: FlightDetailScreenProps) => {
  // В реальном приложении данные будут загружаться по ID
  const flightDetails = {
    number: 'TAS-MSK 234',
    departure: '14:30',
    arrival: '17:45',
    date: '2024-03-20',
    status: 'Предстоит',
    aircraft: 'Boeing 737-800',
    gate: 'A12',
    crew: [
      { name: 'Петр Иванов', role: 'Командир' },
      { name: 'Анна Смирнова', role: 'Второй пилот' },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.flightNumber}>{flightDetails.number}</Text>
          <Text style={styles.status}>{flightDetails.status}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Время</Text>
          <View style={styles.timeContainer}>
            <View style={styles.timeBlock}>
              <Text style={styles.timeLabel}>Вылет</Text>
              <Text style={styles.time}>{flightDetails.departure}</Text>
            </View>
            <View style={styles.timeBlock}>
              <Text style={styles.timeLabel}>Прилет</Text>
              <Text style={styles.time}>{flightDetails.arrival}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Информация о рейсе</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoRow}>
              <Text style={styles.infoLabel}>Самолет: </Text>
              {flightDetails.aircraft}
            </Text>
            <Text style={styles.infoRow}>
              <Text style={styles.infoLabel}>Выход: </Text>
              {flightDetails.gate}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Экипаж</Text>
          {flightDetails.crew.map((member, index) => (
            <View key={index} style={styles.crewCard}>
              <Text style={styles.crewName}>{member.name}</Text>
              <Text style={styles.crewRole}>{member.role}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
  flightNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
    color: '#007AFF',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  timeBlock: {
    flex: 1,
  },
  timeLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  time: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  infoRow: {
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  infoLabel: {
    color: '#666',
  },
  crewCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  crewName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  crewRole: {
    fontSize: 14,
    color: '#666',
  },
});

export default FlightDetailScreen;
