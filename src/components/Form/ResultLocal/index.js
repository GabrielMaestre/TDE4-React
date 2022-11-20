import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ResultMetLocal(props) {
    return(
        <View>
          <Text>{props.msgResultLocal}</Text>
        </View>
    );
}