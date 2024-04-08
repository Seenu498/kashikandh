
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set the background color to white
  },
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Set background color to white with some transparency
  },
  textContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'transparent', // Set background to transparent
  },
  heading: {
    fontSize: 50,
    color: '#000', // Set text color
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '500',
  },
  subHeading: {
    fontSize: 28,
    color: '#3d3d3d', // Set text color
    textAlign: 'center',
    marginBottom: 30,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#000',
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontSize: 25,
    fontWeight: '500',
  },
});


export default styles;
