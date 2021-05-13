import React from "react";
import { View, TextInput, Button, Image, Text } from "react-native";
import Styles from "./Styles"; 

const PersonalInfo = () => {
    return (
        <View style={Styles.personalInfoContainer}>
            <Image source = {require("../assets/wired-brain-coffee-logo.png")}/>
            <View>
                <Text>Please enter your name</Text>
                <TextInput style={Styles.nameTextInput}/>
            </View>
            <Button title="Start chatting!" onPress={() => {}} />
        </View>
    );
}

export default PersonalInfo;