import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import styles from "./styles";
import ScreenProps from "../../interfaces/basePage.interface";
const { useCallback } = React;
import {UsersSvg} from '../../assets/svg/index'
const MainScreen: React.FC<ScreenProps> = ({
  navigation: { navigate }
}): JSX.Element => {
  const handleTaskerClick = useCallback(() => navigate("Profile"), [navigate]);
  const mainBackgroundImg = require("../../assets/svg/MaskGroup6.svg");

  return (
    <>

        <View style={styles.container}>
          <Text style={styles.title}>نورتنا</Text>
          <Text style={styles.subTitle}>سجل حساب جديد ك</Text>
        </View>

      <View style={styles.usersContainer}>
        <View style={styles.employer}>
          <Image
            style={styles.taskerImg}
            source={require("../../assets/svg/user.png")}
          />
          <Text style={styles.taskerTitle}>صاحب مؤسسة \ منشئة</Text>
        </View>
        <TouchableHighlight onPress={handleTaskerClick} underlayColor="white">
          <View style={styles.tasker}>
            {/* <Image
              style={styles.taskerImg}
              source={<UsersSvg/>}
            /> */}
            <UsersSvg/>
            <Text style={styles.taskerTitle}>منفذ مهام</Text>
          </View>
        </TouchableHighlight>
      </View>

    </>
  );
};

export default MainScreen;
