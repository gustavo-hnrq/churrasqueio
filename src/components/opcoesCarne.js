import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Button } from "react-native-paper";

const Data = [
  {
    id: 1,
    im: require("../../assets/boi.png"),
    first_name: "Picanha",
  },
  {
    id: 2,
    im: require("../../assets/boi.png"),
    first_name: "Maminha",
  },
  {
    id: 3,
    im: require("../../assets/boi.png"),
    first_name: "Cupim",
  },
  {
    id: 4,
    im: require("../../assets/boi.png"),
    first_name: "Contrafilé",
  },
  {
    id: 5,
    im: require("../../assets/porco.png"),
    first_name: "Paleta",
  },
  {
    id: 6,
    im: require("../../assets/porco.png"),
    first_name: "Filé Mignon",
  },
  {
    id: 7,
    im: require("../../assets/porco.png"),
    first_name: "Linguiça",
  },
  {
    id: 8,
    im: require("../../assets/galinha.png"),
    first_name: "Coxa",
  },
  {
    id: 9,
    im: require("../../assets/galinha.png"),
    first_name: "Coração",
  },
  {
    id: 10,
    im: require("../../assets/galinha.png"),
    first_name: "Asa",
  },
];

export default class Carnes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderData: Data,
      selectedCarnes: [],
    };
    this.dataPackage = this.dataPackage.bind(this);
  }
  onPressHandler(id) {
    let renderData = [...this.state.renderData];
    let selectedCarnes = [...this.state.selectedCarnes];

    for (let data of renderData) {
      if (data.id === id) {
        data.selected = data.selected === null ? true : !data.selected;

        if (data.selected) {
          selectedCarnes.push(data.first_name);
        } else {
          selectedCarnes = this.arrayRemove(
            this.state.selectedCarnes,
            data.first_name,
            data.id
          );
        }
        break;
      }

    }

    this.setState({ renderData });
    this.setState({ selectedCarnes });

  }

  arrayRemove(arr, value, id) {
   return arr.filter(function (geeks) {
     return geeks != value;
    });

  }


  dataPackage() {
    const { enviarDados } = this.props; 
    const dados = [...this.state.selectedCarnes];
    enviarDados(dados);
  }

  render() {
    return (
      <View style={styles.FlatListContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={this.state.renderData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Button title="Enviar Dados"
              style={
                item.selected == true
                  ? {
                    margin: 4,
                    borderRadius: 6,
                    borderWidth: 2,
                    borderColor: "#e1601f",
                    width: "48%",
                    justifyContent: "space-between",
                    height: 50,
                    padding: 3,
                  }
                  : {
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
              onPress={async () => { await this.onPressHandler(item.id); this.dataPackage(); }}
            >
              <View style={styles.butao}>
                <Image style={styles.imagem} source={item.im} />
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
    marginBottom: 225,
  },
  imagem: {
    height: 25,
    width: 28,
    marginRight: 10,
  },
  butao: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export { Carnes };

// import React, { Component } from "react";
// import { StyleSheet, Text, View, FlatList, Image } from "react-native";
// import { Button } from "react-native-paper";

// const Data = [
//   {
//     id: 1,
//     im: require("../../assets/boi.png"),
//     first_name: "Picanha",
//   },
//   {
//     id: 2,
//     im: require("../../assets/boi.png"),
//     first_name: "Maminha",
//   },
//   {
//     id: 3,
//     im: require("../../assets/boi.png"),
//     first_name: "Cupim",
//   },
//   {
//     id: 4,
//     im: require("../../assets/boi.png"),
//     first_name: "Contrafilé",
//   },
//   {
//     id: 5,
//     im: require("../../assets/porco.png"),
//     first_name: "Paleta",
//   },
//   {
//     id: 6,
//     im: require("../../assets/porco.png"),
//     first_name: "Filé Mignon",
//   },
//   {
//     id: 7,
//     im: require("../../assets/porco.png"),
//     first_name: "Linguiça",
//   },
//   {
//     id: 8,
//     im: require("../../assets/galinha.png"),
//     first_name: "Coxa",
//   },
//   {
//     id: 9,
//     im: require("../../assets/galinha.png"),
//     first_name: "Coração",
//   },
//   {
//     id: 10,
//     im: require("../../assets/galinha.png"),
//     first_name: "Asa",
//   },
// ];

// export default class Carnes extends Component {

//   constructor() {
//     super();
//     this.state = {
//       renderData: Data,
//       selectedCarnes: [],
//     };
//   }

//   onPressHandler(id) {
//     let renderData = [...this.state.renderData];
//     let selectedCarnes = [...this.state.selectedCarnes];

//     for (let data of renderData) {
//       if (data.id == id) {
//         data.selected = data.selected == null ? true : !data.selected;

//         if (data.selected) {
//           selectedCarnes.push(data.first_name);
//           selectedCarnes.push(data.im);
//         } else {
//           selectedCarnes = this.arrayRemove(
//             this.state.selectedCarnes,
//             data.first_name,
//             data.im
//           );
//         }
//         break;
//       }
//     }

//     this.setState({ renderData });
//     this.setState({ selectedCarnes });
//   }

//   // function which remove value from array and return
//   arrayRemove(arr, value) {
//     return arr.filter(function (geeks) {
//       return geeks != value;
//     });
//   }
//   render() {
//     return (
//       <View style={styles.FlatListContainer}>
//         <FlatList
//           showsHorizontalScrollIndicator={false}
//           numColumns={2}
//           data={this.state.renderData} // set render data in flatlist
//           keyExtractor={(item) => item.id.toString()} // keyExtractor convert INT  'item.id' value to string
//           renderItem={({ item }) => (
//             <Button
//               style={
//                 item.selected == true
//                   ? // style when button is selected
//                   {
//                     margin: 4,
//                     borderRadius: 6,
//                     borderWidth: 2,
//                     borderColor: "#e1601f",
//                     width: "48%",
//                     justifyContent: "space-between",
//                     height: 50,
//                     padding: 3,
//                   }
//                   : // style when button is unSelected
//                   {
//                     margin: 4,
//                     borderRadius: 6,
//                     borderWidth: 2,
//                     backgroundbColor: "#ffffff",
//                     borderColor: "black",
//                     width: "48%",
//                     height: 50,
//                     padding: 3,
//                   }
//               }
//               // onPress will call the function when button is clicked
//               onPress={() => this.onPressHandler(item.id)}
//             >
//               <View style={styles.butao}>
//                 <Image
//                   style={styles.imagem}
//                   source={item.im}
//                 />
//                 <Text>{item.first_name}</Text>
//               </View>
//             </Button>
//           )}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   FlatListContainer: {
//     alignSelf: "center",
//     width: "100%",
//     marginTop: 40,
//     marginBottom: 225,
//   },
//   imagem: {
//     height: 25,
//     width: 28,
//     marginRight: 10,
//   },
//   butao: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });
