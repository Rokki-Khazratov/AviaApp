import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../../components/common/BackButton';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ru');

  const handleLanguageChange = () => {
    setLanguage(language === 'ru' ? 'uz' : 'ru');
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.header}>
        <Text style={styles.title}>Настройки</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Основные</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Уведомления</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={notifications ? '#007AFF' : '#f4f3f4'}
            />
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Темная тема</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={darkMode ? '#007AFF' : '#f4f3f4'}
            />
          </View>

          <TouchableOpacity 
            style={styles.languageButton}
            onPress={handleLanguageChange}
          >
            <Text style={styles.settingLabel}>Язык</Text>
            <Text style={styles.languageValue}>
              {language === 'ru' ? 'Русский' : 'Ўзбек'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Безопасность</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Сменить пароль</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.card}>
          <TouchableOpacity style={[styles.button, styles.logoutButton]}>
            <Text style={[styles.buttonText, styles.logoutText]}>Выйти</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  settingLabel: {
    fontSize: 16,
    color: '#1a1a1a',
  },
  languageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  languageValue: {
    fontSize: 16,
    color: '#007AFF',
  },
  button: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  logoutButton: {
    marginTop: 8,
  },
  logoutText: {
    color: '#FF3B30',
  },
});

export default SettingsScreen;
