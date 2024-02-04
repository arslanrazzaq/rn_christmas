import { View, Text, StyleSheet } from 'react-native';

const Barcode = () => {
    return (
      <View style={styles.container}>
        <Text>Barcode Screen</Text>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
});


export default Barcode;