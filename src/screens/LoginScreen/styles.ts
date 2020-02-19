import { Image } from 'react-native';
import {StyleSheet} from 'react-native';
import styles from '../../infrastructure/styles/theme';


export default StyleSheet.create({
    container :{
          backgroundColor : styles.main,
          flex : .5, 
          alignItems :"center",
          justifyContent  : "center"
    },
    backgroundImg :{
  
        width: 1000 ,
        height : 1000,
        opacity : 100,
    },
    title :{
        color : styles.titleColor ,
        fontSize : 30 ,
        fontFamily : 'Hacen Maghreb Lt',
        marginTop : 155.5
    },
    subTitle : {
        color : styles.subTitleColor,
        fontSize : 14,
        fontFamily: 'Hacen Maghreb Lt',
        paddingTop : 6,
    },
    usersContainer :{
        flex : 1,
        flexDirection : "row" , 
        justifyContent : "space-evenly",
        padding : 20
    },
    tasker : {
        backgroundColor : styles.taskerButtonBackGroundColor ,
        width : 146 , 
        height : 165,
        borderRadius : 5,
        display : "flex" ,
        alignItems : "center",
        marginTop :  81

    },
    employer : {
        backgroundColor : styles.employerButtonBackGround,
        width : 146 , 
        height : 165,
        borderRadius : 5,
        display : "flex" ,
        alignItems : "center",
        marginTop :  81

    },
    taskerImg : {
        width : 70 ,
        height : 70,
        marginTop : 20
    },
    taskerTitle : {
        color : styles.taskerTitleColor,
        fontSize : 16,
      
    }
})