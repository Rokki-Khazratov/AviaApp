import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FinanceScreen = () => {
  const financeData = {
    currentMonth: {
      salary: 250000,
      flightHours: 87,
      bonuses: 15000,
    },
    history: [
      {
        month: 'Февраль 2024',
        salary: 245000,
        flightHours: 82,
        bonuses: 12000,
      },
      {
        month: 'Январь 2024',
        salary: 238000,
        flightHours: 79,
        bonuses: 10000,
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Финансы</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Текущий месяц</Text>
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>Базовая зарплата</Text>
              <Text style={styles.value}>{financeData.currentMonth.salary} ₽</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Налет часов</Text>
              <Text style={styles.value}>{financeData.currentMonth.flightHours}ч</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Бонусы</Text>
              <Text style={styles.value}>{financeData.currentMonth.bonuses} ₽</Text>
            </View>
            <View style={[styles.row, styles.total]}>
              <Text style={styles.totalLabel}>Итого</Text>
              <Text style={styles.totalValue}>
                {financeData.currentMonth.salary + financeData.currentMonth.bonuses} ₽
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>История</Text>
          {financeData.history.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.monthTitle}>{item.month}</Text>
              <View style={styles.row}>
                <Text style={styles.label}>Сумма</Text>
                <Text style={styles.value}>{item.salary + item.bonuses} ₽</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Налет часов</Text>
                <Text style={styles.value}>{item.flightHours}ч</Text>
              </View>
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
  total: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007AFF',
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
});

export default FinanceScreen;
