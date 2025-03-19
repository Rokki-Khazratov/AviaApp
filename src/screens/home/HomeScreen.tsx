import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProps } from '../../types/navigation';

type HomeScreenProps = {
  navigation: NavigationProps;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const getFormattedDate = () => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const date = new Date();
    return `${date.toLocaleDateString()}, ${days[date.getDay()]}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Добрый день, Шамшодбек Хазратов</Text>
          <Text style={styles.role}>Пилот</Text>
          <Text style={styles.date}>{getFormattedDate()}</Text>
        </View>

        <View style={styles.upcomingFlight}>
          <Text style={styles.sectionTitle}>Ближайший рейс</Text>
          <TouchableOpacity 
            style={styles.flightCard}
            onPress={() => navigation.navigate('FlightDetail', { flightId: '1' })}
          >
            <View style={styles.flightHeader}>
              <View style={styles.flightIcon} />
              <Text style={styles.flightNumber}>HY 234</Text>
            </View>
            <View style={styles.routeContainer}>
              <Text style={styles.airport}>TAS</Text>
              <View style={styles.routeLine}>
                <Text style={styles.routeArrow}>→</Text>
              </View>
              <Text style={styles.airport}>SVO</Text>
            </View>
            <Text style={styles.flightTime}>14:30 - 17:45</Text>
            <View style={styles.flightInfoRow}>
              <Text style={styles.flightStatus}>До вылета: 2ч 30м</Text>
              <Text style={styles.gate}>Выход: A12</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.stats}>
          <Text style={styles.sectionTitle}>Статистика за месяц</Text>
          <View style={styles.statsGrid}>
            <TouchableOpacity 
              style={styles.statCard}
              onPress={() => navigation.navigate('History')}
            >
              <Text style={styles.statNumber}>23</Text>
              <Text style={styles.statLabel}>Рейсов</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.statCard}
              onPress={() => navigation.navigate('History')}
            >
              <Text style={styles.statNumber}>87ч</Text>
              <Text style={styles.statLabel}>Налет</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Быстрые действия</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => navigation.navigate('Schedule')}
            >
              <Text style={styles.actionTitle}>Расписание</Text>
              <Text style={styles.actionSubtitle}>На этот месяц</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => navigation.navigate('Finance')}
            >
              <Text style={styles.actionTitle}>Финансы</Text>
              <Text style={styles.actionSubtitle}>Зарплата и бонусы</Text>
            </TouchableOpacity>
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
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  seeAllButton: {
    fontSize: 14,
    color: '#007AFF',
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
  flightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  flightIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    marginRight: 8,
  },
  flightNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  flightTime: {
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  flightInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  flightStatus: {
    fontSize: 14,
    color: '#007AFF',
  },
  gate: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 12,
  },
  crewPreview: {
    marginTop: 4,
  },
  crewTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  crewMember: {
    fontSize: 14,
    color: '#1a1a1a',
    marginBottom: 2,
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
  quickActions: {
    padding: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  airport: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  routeLine: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  routeArrow: {
    fontSize: 18,
    color: '#007AFF',
  },
});

export default HomeScreen;
