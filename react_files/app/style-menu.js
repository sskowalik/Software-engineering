import { StyleSheet } from 'react-native';
export const styles_menu = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },    
  containerTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    height: 70,
  },  
  herbPolski: {
    width: 51,
    height: 60,
    marginLeft: '16%',
    marginTop: '1%',
  },
  urzedasPl: {
    marginTop: '1%',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 48,
    color: '#000000',
  },
  lineTop: {
    borderWidth: 1,
    borderColor: '#B3B3B3',
  },
});
