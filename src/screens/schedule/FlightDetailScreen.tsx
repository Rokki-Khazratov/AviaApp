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
  const flightDetails = {
    number: 'HY 234',
    from: {
      code: 'TAS',
      city: 'Ташкент',
      terminal: 'T2',
    },
    to: {
      code: 'SVO',
      city: 'Москва',
      terminal: 'C',
    },
    departure: '14:30',
    arrival: '17:45',
    date: '2024-03-20',
    status: 'Предстоит',
    aircraft: {
      model: 'Boeing 737-800',
      registration: 'UK32021',
      age: '4.5 года',
    },
    gate: 'A12',
    baggage: 'Лента 3',
    crew: [
      { 
        name: 'Петр Иванов',
        role: 'Командир',
        experience: '12 лет',
        flightHours: '8500 часов'
      },
      { 
        name: 'Анна Смирнова',
        role: 'Второй пилот',
        experience: '5 лет',
        flightHours: '3200 часов'
      },
    ],
    weather: {
      departure: {
        temp: '+18°C',
        conditions: 'Ясно',
        wind: '5 м/с'
      },
      arrival: {
        temp: '+12°C',
        conditions: 'Облачно',
        wind: '8 м/с'
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.flightNumber}>{flightDetails.number}</Text>
          <View style={styles.routeContainer}>
            <View style={styles.airportInfo}>
              <Text style={styles.airportCode}>{flightDetails.from.code}</Text>
              <Text style={styles.airportCity}>{flightDetails.from.city}</Text>
            </View>
            <View style={styles.routeLine}>
              <Text style={styles.routeArrow}>→</Text>
            </View>
            <View style={styles.airportInfo}>
              <Text style={styles.airportCode}>{flightDetails.to.code}</Text>
              <Text style={styles.airportCity}>{flightDetails.to.city}</Text>
            </View>
          </View>
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
              {flightDetails.aircraft.model}
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Погода</Text>
          <View style={styles.weatherContainer}>
            <View style={styles.weatherCard}>
              <Text style={styles.weatherTitle}>Вылет</Text>
              <Text style={styles.weatherTemp}>{flightDetails.weather.departure.temp}</Text>
              <Text style={styles.weatherConditions}>{flightDetails.weather.departure.conditions}</Text>
              <Text style={styles.weatherWind}>Ветер: {flightDetails.weather.departure.wind}</Text>
            </View>
            <View style={styles.weatherCard}>
              <Text style={styles.weatherTitle}>Прилет</Text>
              <Text style={styles.weatherTemp}>{flightDetails.weather.arrival.temp}</Text>
              <Text style={styles.weatherConditions}>{flightDetails.weather.arrival.conditions}</Text>
              <Text style={styles.weatherWind}>Ветер: {flightDetails.weather.arrival.wind}</Text>
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
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  airportInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  airportCode: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  airportCity: {
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
  weatherContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  weatherCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  weatherTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  weatherTemp: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  weatherConditions: {
    fontSize: 16,
    color: '#666',
  },
  weatherWind: {
    fontSize: 14,
    color: '#666',
  },
});

export default FlightDetailScreen;
