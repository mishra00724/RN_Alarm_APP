import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

interface Alarm {
  id: string;
  time: string;
  label: string;
  repeat: string;
  enabled: boolean;
}

export default function AlarmListScreen() {
  const [alarms, setAlarms] = useState<Alarm[]>([
    { id: '1', time: '07:00', label: 'Wake Up', repeat: 'Mon-Fri', enabled: true },
    { id: '2', time: '08:30', label: 'Gym', repeat: 'Sat', enabled: false },
    { id: '3', time: '09:00', label: 'Meeting', repeat: 'Sun', enabled: true },
  ]);
  const [isEditMode, setIsEditMode] = useState(false);

  const addNewAlarm = () => {
    const newAlarm: Alarm = {
      id: Date.now().toString(),
      time: '08:00',
      label: 'New Alarm',
      repeat: 'Never',
      enabled: true,
    };
    setAlarms([...alarms, newAlarm]);
  };

  const deleteAlarm = (id: string) => {
    Alert.alert(
      'Delete Alarm',
      'Are you sure you want to delete this alarm?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setAlarms(alarms.filter(alarm => alarm.id !== id));
          },
        },
      ]
    );
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const renderAlarmItem = ({ item }: { item: Alarm }) => (
    <View style={styles.alarmItem}>
      <View>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.label}>{item.label} | {item.repeat}</Text>
      </View>
      <View style={styles.alarmItemRight}>
        <Text style={{ color: item.enabled ? 'green' : 'gray' }}>
          {item.enabled ? 'On' : 'Off'}
        </Text>
        {isEditMode && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteAlarm(item.id)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alarm</Text>
        <TouchableOpacity onPress={toggleEditMode}>
          <Text style={[styles.editButton, isEditMode && styles.editButtonActive]}>
            {isEditMode ? 'Done' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </View>
      {/* Alarm List */}
      <FlatList
        data={alarms}
        keyExtractor={item => item.id}
        renderItem={renderAlarmItem}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      {/* Floating Add Button */}
      <TouchableOpacity style={styles.fab} onPress={addNewAlarm}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 32, fontWeight: 'bold' },
  editButton: { fontSize: 18, color: '#ff9500' },
  editButtonActive: { color: '#007AFF' },
  alarmItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#f2f2f2' },
  alarmItemRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  time: { fontSize: 36, fontWeight: '600' },
  label: { fontSize: 16, color: '#888' },
  deleteButton: { backgroundColor: '#FF3B30', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  deleteButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  fab: { position: 'absolute', right: 24, bottom: 32, backgroundColor: '#ff9500', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', elevation: 4 },
  fabText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
});