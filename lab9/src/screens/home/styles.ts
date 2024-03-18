import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: '#044244',
  },
  header: {
    marginBottom: 40,
    width: '100%',
    paddingHorizontal: 35,
  },
  headerContent: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 40,
    alignItems: 'center',
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsText: {
    marginLeft: 5,
    color: '#FFF',
  },
  title: {
    fontSize: 25,
    color: '#FFF',
    paddingVertical: 25,
  },
  searchBarContainer: {
    flexDirection: 'row',
    borderColor: '#9ca1a2',
    borderRadius: 20,
    borderWidth: 0.2,
    paddingVertical: 5,
    alignItems: 'center',
  },
  searchBarInput: {
    paddingHorizontal: 20,
    fontSize: 11,
    width: '90%',
    color: '#9ca1a2',
  },
  scrollViewContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 30,
  },
  style1: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 35,
  },
  style4: {
    height: 160,
    backgroundColor: '#3c636c',
    width: 20,
    marginLeft: 20,
    marginTop: 120,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  style5: {
    height: 160,
    backgroundColor: '#3c636c',
    width: 20,
    marginLeft: -40,
    marginRight: 20,
    marginTop: 120,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  style6: {
    height: 160,
    backgroundColor: '#3c636c',
    width: 20,
    marginLeft: 20,
    marginTop: 120,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default styles;
