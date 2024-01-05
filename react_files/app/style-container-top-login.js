import { StyleSheet } from 'react-native';
export const styles_login = StyleSheet.create({
  container: {
    flexDirection: 'column',
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
    marginLeft: '0%',
    marginTop: '1%',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 48,
    color: '#000000',
  },
  info: {
    marginLeft: '2%',
    marginTop: '1%',
    width: 50,
    height: 50,
    padding: 0,
  },
  lineTop: {
    borderWidth: 1,
    borderColor: '#B3B3B3',
  },

});
