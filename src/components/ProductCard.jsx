import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Pressable
} from 'react-native';
import { icons, images } from '../constants';

const ProductCard = ({ product, onAddPress, onItemPress }) => {

    return (
        <View style={styles.container}>
            <Pressable onPress={onItemPress} style={styles.imageContainer}>
                <Image
                    source={images[`${product.image}`]}
                    resizeMode="contain"
                    style={styles.image}
                />
            </Pressable>
            <View style={styles.infoContainer}>
                <Pressable onPress={onItemPress} style={styles.infoContainerLeft}>
                    <Text style={styles.name}>
                        {product.name}
                    </Text>
                    <Text style={styles.price}>
                        ${product.price.toFixed(2)}
                    </Text>
                </Pressable>
                <View style={styles.infoContainerRight}>
                    <TouchableOpacity
                        style={styles.addButton}
                        activeOpacity={0.9}
                        onPress={onAddPress}
                    >
                        <Image
                            source={icons.add}
                            resizeMode="contain"
                            style={styles.addIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 12,
    },
    imageContainer: {
        height: 120,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "90%",
        height: "90%",
    },
    infoContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
    },
    infoContainerLeft: {
        flex: 1
    },
    infoContainerRight: {

    },
    name: {
        fontSize: 13,
        fontWeight: "500",
    },
    price: {
        marginTop: 5,
        fontSize: 12.5,
        color: "#FF0000",
        fontWeight: "500",
    },
    addButton: {
        marginTop: 7,
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    addIcon: {
        width: 9,
        height: 9,
    },

});

export default ProductCard;