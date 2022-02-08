import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import {Container,Icon, Header, UserInfo, Photo, User, UserGreenting, UserName, UserWrapper,HighlightCards} from './styles'
import { RFValue } from 'react-native-responsive-fontsize';
import { HighlightCard } from '../../components/HighightCard';


export function Dashboard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
        <UserInfo>
            <Photo  source={{uri:'https://avatars.githubusercontent.com/u/41512408?v=4'  }}/>
            <User>
              <UserGreenting>Olá,</UserGreenting>
              <UserName>Wesley</UserName>
            </User>
        </UserInfo>
           <Icon name="power"/>
           {/* <Feather name="power" size={RFValue(24)} color="#E74040"/> */}
        </UserWrapper>
      </Header>

      <HighlightCards>
          <HighlightCard/>
          <HighlightCard/>
          <HighlightCard/>
      </HighlightCards>
     
    </Container>
  )
}