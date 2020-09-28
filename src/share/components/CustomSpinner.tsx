import React from "react";
import {StyleSheet, View} from "react-native";
import {Spinner} from "native-base";

export const CustomSpinner = ({ isLoading }: { isLoading: boolean }) => {
    return (
        isLoading ? (
            <View style={styles.spinnerWrap}>
                <Spinner/>
            </View>
        ) : null
    );
}

const styles = StyleSheet.create({
    spinnerWrap: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
