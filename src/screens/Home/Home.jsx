import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import Swiper from "react-native-swiper";

import { icons, images } from "../../constants";
import { ProductCard } from "../../components";
import HOME_PRODUCTS from "../../HOME_PRODUCTS.json";

const PRODUCTS = HOME_PRODUCTS;


const BannerItem = () => {
  return (
    <View style={styles.slider}>
      <Image
        source={images.banner_1}
        resizeMode="contain"
        style={styles.bannerImage}
      />
    </View>
  )
} 

const Home = ({ navigation }) => {

  const [products, setProducts] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.greetingArea}>
            <Text style={styles.headText}>Hello,</Text>
            <Text style={styles.subText}>SARA ROGER</Text>
          </View>
          <TouchableOpacity
            style={styles.cartButtonArea}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Cart');
            }}
          >
            <View style={styles.cartButtonCountArea}>
              <Text style={styles.cartButtonCountText}>{products.length}</Text>
            </View>
            <View style={styles.cartButtonIconArea}>
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={styles.cartButtonIcon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.topProductSection}>
          <View style={styles.topProductArea}>
            <View style={styles.topProductImageArea}>
              <Image
                source={images.top_product_1}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
            <View style={styles.topProductImageArea}>
              <Image
                source={images.top_product_2}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
            <View style={styles.topProductImageArea}>
              <Image
                source={images.top_product_3}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
            <View style={styles.topProductImageArea}>
              <Image
                source={images.top_product_4}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
            <View style={styles.topProductImageArea}>
              <Image
                source={images.top_product_5}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
          </View>
        </View>

        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListHeaderComponent={() => (
            <>
              <View style={styles.bannerSection}>
                <View style={styles.offerImageArea}>
                  <Image
                    source={images.offerImage}
                    resizeMode="contain"
                    style={styles.offerImage}
                  />
                </View>
                <Swiper
                  style={styles.banner}
                  dot={<View style={styles.dot} />}
                  activeDot={<View style={styles.activeDot} />}
                >
                  <BannerItem />
                  <BannerItem />
                  <BannerItem />
                  <BannerItem />
                </Swiper>
              </View>
              <Text style={styles.newCollectionText}> New Collection </Text>
            </>
          )}
          ListFooterComponent={() => (
            <View style={styles.SP}></View>
          )}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onItemPress={() => {
                navigation.navigate('Detail', { product: item });
              }}
              onAddPress={() => {
                let duplicate = products.filter(
                  (element) => element.id == item.id
                );
                if (duplicate.length != 0) {
                  Alert.alert("Already Added");
                  return;
                } else {
                  let tempProducts = products;
                  tempProducts.push(item);
                  setProducts(tempProducts);
                }
              }}
            />
          )}
          style={styles.newCollectionSection}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: 80,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greetingArea: {
    paddingLeft: 10,
  },
  headText: {
    color: "#767575",
    marginBottom: 10,
  },
  subText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  cartButtonArea: {
    width: 80,
    height: 60,
  },
  cartButtonCountArea: {
    position: "absolute",
    width: 20,
    height: 20,
    zIndex: 10,
    right: 10,
    top: -7,
    borderRadius: 50,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
  },
  cartButtonCountText: {
    color: "white",
    fontSize: 13,
  },
  cartButtonIconArea: {
    width: 60,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "white",
  },
  cartButtonIcon: {
    width: 19,
    height: 19,
  },
  topProductSection: {
    height: 70,
    marginVertical: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  topProductArea: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topProductImageArea: {
    width: 100,
    height: 70,
  },
  topProductImage: {
    width: "100%",
    height: "100%",
  },
  bannerSection: {
    height: 250,
  },
  offerImageArea: {
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    right: 0,
    width: 75,
    height: 95,
  },
  offerImage: {
    width: "100%",
    height: "100%",
  },
  banner: {},
  slider: {
    flex: 1,
  },
  bannerImage: {
    width: "100%",
    height: 225
  },
  dot: {
    backgroundColor: "#BFBFBF",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#FF0000",
    width: 20,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  newCollectionSection: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  newCollectionText: {
    fontSize: 18,
    marginBottom: 16,
  },
  SP: {
    height: 80,
  },
});
