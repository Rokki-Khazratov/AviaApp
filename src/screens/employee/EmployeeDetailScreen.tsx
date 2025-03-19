import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMAGES } from '../../constants/images';

type EmployeeDetailScreenProps = {
  navigation: any;
  route: {
    params: {
      employeeId: string;
    };
  };
};

const EmployeeDetailScreen = ({ route }: EmployeeDetailScreenProps) => {
  // В реальном приложении данные будут загружаться по ID
  const employeeData = {
    name: 'Анна Смирнова',
    role: 'Старший бортпроводник',
    experience: '5 лет',
    flights: 1240,
    flightHours: 3600,
    languages: ['Русский', 'English', 'Uzbek'],
    certifications: [
      {
        name: 'Базовая подготовка бортпроводников',
        date: '2019-05-15',
        expires: '2024-05-15',
      },
      {
        name: 'Аварийно-спасательная подготовка',
        date: '2023-08-20',
        expires: '2024-08-20',
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            {/* Добавим позже, когда изображение будет готово */}
            {/* <Image source={IMAGES.avatarPlaceholder} style={styles.avatar} /> */}
          </View>
          <Text style={styles.name}>{employeeData.name}</Text>
          <Text style={styles.role}>{employeeData.role}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Общая информация</Text>
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>Опыт работы</Text>
              <Text style={styles.value}>{employeeData.experience}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Количество рейсов</Text>
              <Text style={styles.value}>{employeeData.flights}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Налет часов</Text>
              <Text style={styles.value}>{employeeData.flightHours}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Языки</Text>
          <View style={styles.card}>
            {employeeData.languages.map((language, index) => (
              <Text key={index} style={styles.language}>{language}</Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Сертификаты</Text>
          {employeeData.certifications.map((cert, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.certName}>{cert.name}</Text>
              <Text style={styles.certDate}>Получен: {cert.date}</Text>
              <Text style={styles.certExpiry}>Действует до: {cert.expires}</Text>
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
    alignItems: 'center',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1a1a1a',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  language: {
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  certName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  certDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  certExpiry: {
    fontSize: 14,
    color: '#666',
  },
});

export default EmployeeDetailScreen;
