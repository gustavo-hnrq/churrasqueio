import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Button } from "react-native-paper";
import cerveja from "../../assets/cerveja.png";

const Data = [
  {
    id: 1,
    im: require("../../assets/cerveja.png"),
    first_name: "Cerveja",
  },
  {
    id: 2,
    im: require("../../assets/refri.png"),
    first_name: "Refrigerante",
  },
  {
    id: 3,
    im: require("../../assets/suco.png"),
    first_name: "Suco",
  },
  {
    id: 4,
    im: require("../../assets/agua.png"),
    first_name: "Água",
  },
];

export default class Bebidas extends Component {
  constructor() {
    super();
    this.state = {
      renderData: Data,
      selectedBebidas: [],
    };
  }

  onPressHandler(id) {
    let renderData = [...this.state.renderData];
    let selectedBebidas = [...this.state.selectedBebidas];

    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;

        if (data.selected) {
          selectedBebidas.push(data.first_name);
          selectedBebidas.push(data.im);
        } else {
          selectedBebidas = this.arrayRemove(
            this.state.selectedBebidas,
            data.first_name,
            data.im
          );
        }
        break;
      }
    }

    this.setState({ renderData });
    this.setState({ selectedBebidas });
  }

  // function which remove value from array and return
  arrayRemove(arr, value) {
    return arr.filter(function (geeks) {
      return geeks != value;
    });
  }
  render() {
    return (
      <View style={styles.FlatListContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={this.state.renderData} // set render data in flatlist
          keyExtractor={(item) => item.id.toString()} // keyExtractor convert INT  'item.id' value to string
          renderItem={({ item }) => (
            <Button
              style={
                item.selected == true
                  ? // style when button is selected
                    {
                      margin: 4,
                      borderRadius: 6,
                      borderWidth: 2,
                      borderColor: "#e1601f",
                      width: "48%",
                      height: 50,
                      padding: 3,
                    }
                  : // style when button is unSelected
                    {
                      margin: 4,
                      borderRadius: 6,
                      borderWidth: 2,
                      backgroundbColor: "#ffffff",
                      borderColor: "black",
                      width: "48%",
                      height: 50,
                      padding: 3,
                    }
              }
              // onPress will call the function when button is clicked
              onPress={() => this.onPressHandler(item.id)}
            >
              <View style={styles.butao}>
                <Image
                  style={styles.imagem}
                  source={item.im}
                />
                <Text>{item.first_name}</Text>
              </View>
            </Button>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlatListContainer: {
    alignSelf: "center",
    width: "100%",
    marginTop: 40,
    marginBottom: 375,
  },
  imagem: {
    height: 28,
    width: 28,
    marginRight: 10,
  },
  butao: {
    flexDirection: "row",
    alignItems: "center",
  },
});
