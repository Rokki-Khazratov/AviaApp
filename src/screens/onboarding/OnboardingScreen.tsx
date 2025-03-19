import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NavigationProps } from '../../types/navigation';
import { IMAGES } from '../../constants/images';

type OnboardingScreenProps = {
  navigation: NavigationProps;
};

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          {/* Добавим позже, когда изображение будет готово */}
          {/* <Image source={IMAGES.onboarding} style={styles.image} /> */}
        </View>
        <Text style={styles.title}>Добро пожаловать в AirCrew</Text>
        <Text style={styles.subtitle}>
          Управляйте расписанием полетов и следите за своей карьерой
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Начать</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: 240,
    height: 240,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
