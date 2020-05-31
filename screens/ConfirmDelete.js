import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VolunteerContext from '../volunteer-context';
import { Button } from '../components/Button';

const ConfirmDelete = ({ navigation, route }) => {
  const { item } = route.params;
  const { assignedLists, setAssignedLists } = useContext(VolunteerContext);
  const handlePress = (status) => {
    console.log(status);
    let lists = [...assignedLists];
    let filteredLists = lists.filter((list) => {
      return list.id !== item.id;
    });

    setAssignedLists(filteredLists);
    navigation.navigate('VolunteerHome');
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text style={styles.introtext}>
          Are you sure you want to abandon this task?
        </Text>
        <Button text="CONFIRM" onPress={handlePress} />
        <Button
          text="CANCEL"
          onPress={() =>
            navigation.navigate('VolunteerTabs', { screen: 'Volunteer Task' })
          }
          customStyles={{ backgroundColor: 'red', marginTop: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introtext: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  containerInner: {
    justifyContent: 'center',
    width: 300,
    marginBottom: 100,
  },
});

export default ConfirmDelete;