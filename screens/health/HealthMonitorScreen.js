import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Title, ActivityIndicator, Button, Divider } from 'react-native-paper';

// Simulated data generator
const fetchWearableData = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        heartRate: Math.floor(65 + Math.random() * 30),        // 65–95 bpm
        pulse: Math.floor(60 + Math.random() * 20),             // 60–80 bpm
        bloodPressure: `${110 + Math.floor(Math.random() * 20)}/${70 + Math.floor(Math.random() * 10)}`, // e.g., 120/80
        steps: Math.floor(3000 + Math.random() * 4000),         // 3000–7000
        temperature: (36 + Math.random() * 1.5).toFixed(1),     // 36–37.5 °C
        oxygen: (95 + Math.random() * 5).toFixed(1),            // 95–100 %
        respiratoryRate: Math.floor(12 + Math.random() * 6),    // 12–18 breaths/min
      });
    }, 1000)
  );
};

export default function HealthMonitorScreen() {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchWearableData();
    setHealthData(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading || !healthData) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#5e60ce" />
        <Text style={{ marginTop: 10 }}>Fetching data from wearable...</Text>
      </View>
    );
  }

  const renderMetric = (label, value, status = '') => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.metricTitle}>{label}</Text>
        <Text style={styles.metricValue}>{value}</Text>
        {status && <Text>Status: {status}</Text>}
      </Card.Content>
    </Card>
  );

  // Status evaluators
  const getStatus = {
    heartRate: (val) => (val < 60 ? '🟡 Low' : val <= 100 ? '🟢 Normal' : '🔴 High'),
    pulse: (val) => (val < 60 ? '🟡 Low' : val <= 100 ? '🟢 Normal' : '🔴 High'),
    temperature: (val) => (val < 36.1 ? '🟡 Low' : val <= 37.2 ? '🟢 Normal' : '🔴 High'),
    oxygen: (val) => (val < 95 ? '🔴 Low' : '🟢 Normal'),
    respiratoryRate: (val) => (val < 12 ? '🟡 Low' : val <= 20 ? '🟢 Normal' : '🔴 High'),
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>🩺 Health Monitor</Title>

      {renderMetric('❤️ Heart Rate', `${healthData.heartRate} bpm`, getStatus.heartRate(healthData.heartRate))}
      {renderMetric('💓 Pulse', `${healthData.pulse} bpm`, getStatus.pulse(healthData.pulse))}
      {renderMetric('🩸 Blood Pressure', `${healthData.bloodPressure}`)}
      {renderMetric('🚶 Steps Today', `${healthData.steps}`)}
      {renderMetric('🌡️ Body Temperature', `${healthData.temperature} °C`, getStatus.temperature(parseFloat(healthData.temperature)))}
      {renderMetric('🧪 SpO₂ Level', `${healthData.oxygen} %`, getStatus.oxygen(parseFloat(healthData.oxygen)))}
      {renderMetric('🌬️ Respiratory Rate', `${healthData.respiratoryRate} breaths/min`, getStatus.respiratoryRate(healthData.respiratoryRate))}

      <Divider style={{ marginVertical: 20 }} />
      <Button mode="outlined" onPress={loadData} icon="refresh" style={styles.refreshButton}>
        Refresh Data
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f9ff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#5e60ce',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#e0ecff',
    borderRadius: 10,
    marginBottom: 15,
  },
  metricTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  metricValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  refreshButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
