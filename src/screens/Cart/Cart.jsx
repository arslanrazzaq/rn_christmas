import {
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

import PRODUCTS from "../../PRODUCTS.json";
import { icons } from "../../constants";
import { CartCard } from "../../components";


const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Pressable
            onPress={() => { navigation.goBack(); }}
            style={styles.backButtonArea}
          >
            <Image
              source={icons.backButton}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </Pressable>
          <View style={styles.titleArea}>
            <Text style={styles.title}>MY CART</Text>
          </View>
          <View style={styles.backButtonArea}></View>
        </View>

        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartCard product={item} navigation={navigation} />
          )}
          style={styles.productSection}
          ListFooterComponent={() => (
            <View style={styles.SP}></View>
          )}
        />
      </View>
      <View style={styles.footerPallet}>
        <View style={styles.footerArea}>
          <Text style={styles.fullAmount}>$460.00</Text>
          <View style={styles.footerButton}>
            <Text style={styles.footerButtonText}>CHECKOUT</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  topSection: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButtonArea: {
    width: 50,
    height: 40,
    justifyContent: "center",
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  titleArea: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  productSection: {},
  product: {
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
  footerPallet: {
    position: "absolute",
    bottom: 0,
    height: 80,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    backgroundColor: "white",
  },
  footerArea: {
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  fullAmount: {
    fontSize: 20,
  },
  footerButton: {
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF0000",
    justifyContent: 'center',
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: 15,
    color: "white",
  },
  SP: {
    height: 80,
  },
});

export default Cart;


