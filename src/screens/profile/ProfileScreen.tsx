import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ScreenProps } from '../../types/navigation';

const ProfileScreen = ({ navigation }: ScreenProps) => {
  const profileData = {
    name: 'Шамшодбек Хазратов',
    role: 'Пилот',
    photoUrl: 'https://bold.textcontrol.com/images/authors/Bjoern%20Meyer.jpg',
    stats: {
      experience: '8 лет',
      flightHours: '5600 часов',
      routes: '42 направления',
    },
  };

  const menuItems = [
    {
      title: 'История полетов',
      onPress: () => navigation.navigate('History'),
    },
    {
      title: 'Финансы',
      onPress: () => navigation.navigate('Finance'),
    },
    {
      title: 'Настройки',
      onPress: () => navigation.navigate('Settings'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: profileData.photoUrl }}
            style={styles.photo}
          />
          <Text style={styles.name}>{profileData.name}</Text>
          <Text style={styles.role}>{profileData.role}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{profileData.stats.experience}</Text>
            <Text style={styles.statLabel}>Опыт</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{profileData.stats.flightHours}</Text>
            <Text style={styles.statLabel}>Налет</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{profileData.stats.routes}</Text>
            <Text style={styles.statLabel}>Маршруты</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
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
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  photo: {
    width: 120,
    height: 90, // 4:3 соотношение
    borderRadius: 12,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: '#1a1a1a',
  },
});

export default ProfileScreen;
