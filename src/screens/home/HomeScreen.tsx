import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Добрый день, Пилот</Text>
          <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
        </View>

        <View style={styles.upcomingFlight}>
          <Text style={styles.sectionTitle}>Ближайший рейс</Text>
          <View style={styles.flightCard}>
            <Text style={styles.flightNumber}>TAS-MSK 234</Text>
            <Text style={styles.flightTime}>14:30 - 17:45</Text>
            <Text style={styles.flightStatus}>До вылета: 2ч 30м</Text>
          </View>
        </View>

        <View style={styles.stats}>
          <Text style={styles.sectionTitle}>Статистика за месяц</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>23</Text>
              <Text style={styles.statLabel}>Рейсов</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>87ч</Text>
              <Text style={styles.statLabel}>Налет</Text>
            </View>
          </View>
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
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1a1a1a',
  },
  upcomingFlight: {
    padding: 20,
  },
  flightCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
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
  flightStatus: {
    fontSize: 14,
    color: '#007AFF',
  },
  stats: {
    padding: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
