import React, { useState } from "react";
import { View, TextInput, Button, Image, Text } from "react-native";
import ImageChooser from "./ImageChooser";
import Styles from "./Styles"; 

type PersonalInfoProps = {
    onClosed: (name: string, image: string) => void;
};

const PersonalInfo = ({onClosed}: PersonalInfoProps) => { 
    const [name, setName] = useState("");
    const [image, setImage] = useState(""); 
    return (
        <View style={Styles.personalInfoContainer}>
            <Image style={Styles.logo} source = {require("../assets/wired-brain-coffee-logo.png")}/>
            <View style={Styles.enterYourName}>
                <Text style={Styles.nameText}>Please enter name here</Text>
                <TextInput style={Styles.nameTextInput}
                    onChangeText = {(text) => setName(text)}
                    value = {name}
                />
            </View>
            <Button title="Start chatting!" onPress={() => onClosed(name, image)} />
            <ImageChooser onChangeImage = {(image) => setImage(image)} />
        </View>
    );
}

export default PersonalInfo;