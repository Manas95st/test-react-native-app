import {Body, Header, Left, Right, Title} from "native-base";
import React from "react";
import {StatusBar} from "react-native";

export const CustomHeader = ({ title }: {title: string}) => {
    return (
        <Header style={{ elevation: 0 }}>
            <StatusBar barStyle="dark-content" />
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3 }}>
                <Title style={{marginTop: -5, alignSelf: 'center'}}>{title}</Title>
            </Body>
            <Right style={{ flex: 1 }}/>
        </Header>
    )
}
