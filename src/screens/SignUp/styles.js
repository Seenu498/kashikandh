
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  pickerContainer: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  pickerText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: Platform.OS === 'ios' ? 8 : 0,
  },
  dropdownContainer: {
    width: 300,
    height: 160, // Adjust as needed
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default styles;
