import { StyleSheet } from "react-native"

export const colores = {
  primary: '#5856D6',
  second: 'red',
  third: '#59b390'
};


export const estilos = StyleSheet.create({

    texto: {
        fontSize: 25,
        textAlign: 'center',
        color: 'purple',
        margin: 10
        // marginTop: 100,
        
    },
    texto2: {
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
      margin: 10
      // marginTop: 100,
      
  },
  texto3: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    margin: 10,
    // marginTop: 100,
    fontWeight: 'bold'
    
},
    boton: {
        alignItems: 'center',
        backgroundColor: 'purple',
        padding: 10,
        
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        // marginHorizontal: 16,
        backgroundColor: 'black'
        
      },
      container2: {
        flexDirection: 'row'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
      entrada: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        color: 'blue',
        borderRadius: 30
       },
      logo: {
        alignSelf: 'center',
        width: 120,
        height: 140,
        marginBottom: 40
    },
      titulo: {
        textAlign: 'center',
        marginVertical: 8,
      },
      bienvenidos: {
        textAlign:'center',
        marginVertical: 10,
        fontSize: 40
      },
      ajustarTexto: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
      },
      separador: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      containerImagenBoton: {
         flex: 1,
        // margin: 10,
        // marginTop: 0,
        // padding: 30,
        // backgroundColor: 'white'
      },
      buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
      },
      buttonFacebookStyle: {
        alignContent: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 100,
        width: 100,
        borderRadius: 5,
        margin: 5,
        alignSelf: 'center'
      },
      buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 200,
        width: 200,
        // resizeMode: 'stretch',
        alignSelf: 'center',
        marginTop: -60,
        marginBottom: 100
      },
      buttonImageIconStyle2: {
        // padding: 10,
        // margin: 5,
        height: 300,
        width: 300,
        resizeMode: 'center',
        alignSelf: 'center',
        marginTop: 90,
        marginBottom: 60
      },
      buttonImageIconStyle3: {
        padding: 10,
        margin: 50,
        height: 80,
        width: 80,
        // resizeMode: 'stretch',
        alignSelf: 'center',
        marginTop: -60,
        marginBottom: 100
      },
      buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
      },
      buttonIconSeparatorStyle: {
        backgroundColor: 'yellow',
        width: 1,
        height: 40,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
      },
      textoMenu: {
        color: 'white',
        alignSelf: 'center',
        marginTop: -100,
        marginBottom: 60,
        fontSize: 30
      },
      textoMenu2: {
        color: 'black',
        alignSelf: 'center',
        // justifyContent: 'center',
        textAlign:'center',
        marginTop: -100,
        marginBottom: 80,
        fontSize: 20,
        fontWeight: 'bold'
      },
      textoMenu3: {
        color: 'white',
        alignSelf: 'center',
        // justifyContent: 'center',
        textAlign:'center',
        marginTop: -100,
        marginBottom: 80,
        fontSize: 20,
        fontWeight: 'bold'
      },
      avatarContainer:{
        alignItems: 'center',
        marginTop: 20
      },
      avatar: {
      width: 150,
      height: 150,
      borderRadius: 100
      },
      menuContainer:{
      marginVertical: 30,
      marginHorizontal: 20,
      // alignItems: 'center'
      },    
      menuTexto:{
      fontSize: 20,
      color: 'purple'
      },
      menuBoton:{
      marginVertical: 10
      },
      botonIngresar: {
        alignItems: 'center',
        backgroundColor:'#f194ff',
        borderRadius: 30,
        // width: 30
        height:40,
        marginHorizontal: 10

      }




})