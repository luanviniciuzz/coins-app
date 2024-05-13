import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';


const Badge: React.FC = () => {
  return(
    <View>
        <TouchableOpacity
          onPress={() => console.log('ss') }
        >

        </TouchableOpacity>
    </View>
  )
}

export default Badge