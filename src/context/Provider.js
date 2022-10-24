import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Context = React.createContext();

const Provider = (props) => {
    const { children } = props;
    const [landed, setLanded] = useState(false);
    const [currentTemp, setTemperature] = useState(false);

    const context = {
        landed,
        currentTemp,
        changeLanded: val => {
            setLanded(val);
        },
        changeTemp: val => {
          setTemperature(val);
      }
      };

    return (
      <Context.Provider value={context}>
        <SafeAreaProvider>
          <StatusBar style="dark" translucent backgroundColor="transparent" />
            {children}
        </SafeAreaProvider>
      </Context.Provider>
    );
};

export {
  Provider, Context
}
  