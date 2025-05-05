import React, { useState, useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import IdentityCard from '../components/IdentityCard';
import PridePin from '../components/PridePin';
import Button from '../components/Button';
import { genders, orientations, pridePins } from '../data/identityData';

const IdentitySelectionScreen = ({ navigation }) => {
  const { updateProfile } = useContext(AuthContext);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedOrientations, setSelectedOrientations] = useState([]);
  const [selectedPins, setSelectedPins] = useState([]);

  const toggleGender = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter(g => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  const toggleOrientation = (orientation) => {
    if (selectedOrientations.includes(orientation)) {
      setSelectedOrientations(selectedOrientations.filter(o => o !== orientation));
    } else {
      setSelectedOrientations([...selectedOrientations, orientation]);
    }
  };

  const togglePin = (pin) => {
    if (selectedPins.includes(pin)) {
      setSelectedPins(selectedPins.filter(p => p !== pin));
    } else {
      setSelectedPins([...selectedPins, pin]);
    }
  };

  const handleContinue = () => {
    updateProfile({
      genders: selectedGenders,
      orientations: selectedOrientations,
      pridePins: selectedPins
    });
    navigation.navigate('ProfileSetup');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Express Your Identity</Text>
      
      <Text style={styles.sectionTitle}>Gender Identity</Text>
      <View style={styles.grid}>
        {genders.map(gender => (
          <IdentityCard
            key={gender.id}
            label={gender.label}
            icon={gender.icon}
            selected={selectedGenders.includes(gender.id)}
            onPress={() => toggleGender(gender.id)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Sexual Orientation</Text>
      <View style={styles.grid}>
        {orientations.map(orientation => (
          <IdentityCard
            key={orientation.id}
            label={orientation.label}
            icon={orientation.icon}
            selected={selectedOrientations.includes(orientation.id)}
            onPress={() => toggleOrientation(orientation.id)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Pride Pins</Text>
      <Text style={styles.subtitle}>Show off what makes you unique</Text>
      <View style={styles.pinsContainer}>
        {pridePins.map(pin => (
          <PridePin
            key={pin.id}
            label={pin.label}
            color={pin.color}
            selected={selectedPins.includes(pin.id)}
            onPress={() => togglePin(pin.id)}
          />
        ))}
      </View>

      <Button 
        title="Continue" 
        onPress={handleContinue} 
        disabled={selectedGenders.length === 0 || selectedOrientations.length === 0}
        style={styles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#FF2D78'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333'
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  pinsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30
  },
  button: {
    marginTop: 20
  }
});

export default IdentitySelectionScreen;