import React, { useContext } from 'react';
import VolunteerContext from '../volunteer-context';
import { Button } from '../components/Button';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Logo from '../components/Logo';
import TimeOfDay from '../components/TimeOfDay';

const VolunteerHome = ({ navigation }) => {
  const { volunteer, assignedLists } = useContext(VolunteerContext);
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Logo />
          <Text style={styles.greeting}>
            <TimeOfDay />, {volunteer.name}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Volunteer profile')}
            style={styles.editProfile}
          >
            <Text style={styles.editProfileText}>EDIT PROFILE</Text>
          </TouchableOpacity>
          <Button
            text="ADD A NEW LIST"
            onPress={() => navigation.navigate('SelectList')}
            customStyles={{ marginTop: 20 }}
          />
          {!!assignedLists.length && (
            <View style={styles.assignedLists}>
              <Text style={styles.orders}>Your lists</Text>
              {assignedLists.map((item, i) => {
                return (
                  <View key={i} style={styles.item}>
                    <View style={styles.details}>
                      <Text
                        style={[styles.detailsText, styles.detailsTextName]}
                      >
                        Name: {item.userDetails.name}
                      </Text>
                      <View style={styles.numAge}>
                        <Text style={styles.detailsText}>
                          Submitted: {item.age}
                        </Text>
                        <Text style={styles.detailsText}>
                          Items: {item.number_items}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.orderStatus}>
                      <View style={styles.orderBadge}>
                        <Text style={styles.orderBadgeText}>
                          {item.status.toUpperCase()}
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.editBtn}>
                        <Text
                          style={styles.editBtnText}
                          onPress={() => navigation.navigate('VolunteerTabs')}
                        >
                          SHOP ORDER
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
          {!assignedLists.length && (
            <View style={styles.noListsContainer}>
              <Text style={styles.volunteerOpportunitiesSubtitle}>
                You have no lists
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#59DE7E',
    marginTop: 45,
    marginBottom: 10,
    height: 90,
    width: 200,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    shadowColor: 'black',
  },
  buttonText: {
    fontFamily: 'Helvetica',
    fontSize: 26,
    textAlign: 'center',
    width: 150,
    color: 'white',
  },
  greeting: {
    fontFamily: 'Helvetica',
    fontSize: 28,
    marginTop: 30,
    textAlign: 'center',
  },
  innerContainer: {
    // marginBottom: 68,
    alignItems: 'center',
    width: 600,
    marginTop: 100,
  },
  secondaryText: {
    fontSize: 18,
    textAlign: 'center',
  },
  secondaryTextContainer: {
    width: 150,
  },
  editProfile: {
    backgroundColor: 'white',
    borderColor: '#59DE7E',
    borderWidth: 2,
    color: '#59DE7E',
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 15,
    width: 200,
    alignItems: 'center',
  },
  editProfileText: {
    color: '#59DE7E',
    fontSize: 26,
  },
  orders: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  orderStatus: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  orderBadge: {
    backgroundColor: '#DEE078',
    borderRadius: 30,
    padding: 10,
    marginRight: 10,
  },
  orderBadgeText: {
    color: 'white',
    fontSize: 26,
  },

  editBtn: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  editBtnText: {
    fontSize: 24,
  },

  submitted: {
    fontSize: 24,
    marginTop: 20,
  },

  list: {
    flexGrow: 0,
    width: 350,
    height: 250,
  },

  assignedLists: {
    width: 350,
    marginTop: 30,
  },
  noListsContainer: {
    marginTop: 100,
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 18,
    marginTop: 2,
  },
  detailsTextName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 35,
  },
  volunteerOpportunitiesSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numAge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default VolunteerHome;
