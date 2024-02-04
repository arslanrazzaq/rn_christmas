import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Text
} from "react-native";
import { icons, images } from "../constants";

const CartCard = ({ product, navigation }) => {
    const [qty, setQty] = useState(1);

    return (
        <TouchableOpacity style={styles.productContainer} activeOpacity={0.9}
            onPress={() => {
                navigation.navigate('Detail', { product: product });
            }}
        >
            <View style={styles.productImageArea}>
                <Image
                    source={images[`${product.image}`]}
                    resizeMode="contain"
                    style={styles.productImage}
                />
            </View>
            <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{product.name}</Text>
                <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.productQty}>
                <TouchableOpacity
                    style={styles.qtyIcon}
                    activeOpacity={0.9}
                    onPress={() => {
                        let tempQty = qty;
                        ++tempQty;
                        setQty(tempQty);
                    }}
                >
                    <Image
                        source={icons.qtyup}
                        resizeMode="contain"
                        style={styles.qtyIconImage}
                    />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{qty}</Text>
                <TouchableOpacity
                    style={styles.qtyIcon}
                    activeOpacity={0.9}
                    onPress={() => {
                        if (qty != 0) {
                            let tempQty = qty;
                            --tempQty;
                            setQty(tempQty);
                        }
                    }}
                >
                    <Image
                        source={icons.qtydown}
                        resizeMode="contain"
                        style={styles.qtyIconImage}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        marginTop: 10,
        height: 110,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "white",
    },
    productImageArea: {
        flex: 2,
        padding: 10,
    },
    productInfo: {
        flex: 4,
        justifyContent: "center",
    },
    productQty: {
        flex: 1,
        padding: 5,
        justifyContent: "space-around",
        alignItems: "center",
    },
    productImage: {
        width: "100%",
        height: "100%",
    },
    productTitle: {
        fontSize: 14,
        fontWeight: "500",
    },
    productPrice: {
        marginTop: 2,
        color: "#FF0000",
        fontSize: 12,
        fontWeight: "500",
    },
    qtyIcon: {
        width: 20,
        height: 20,
        backgroundColor: "#FF0000",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    qtyText: {},
    qtyIconImage: {
        width: 8,
        height: 8,
    },
    SP: {
        height: 80,
    },
});

export default CartCard;