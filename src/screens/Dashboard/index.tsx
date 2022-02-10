import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
Container,
Icon,
Header, 
UserInfo, 
Photo, 
User, 
UserGreenting,
UserName, 
UserWrapper,
HighlightCards,
Transactions,
Title,
TransactionList,
  } from './styles'
import { HighlightCard } from '../../components/HighightCard';
import { TransactionCard } from '../../components/TransactionCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';


export function Dashboard(){
  const data =[
    {
      title:"Desenvolvimento de site", 
      amount:'R$ 12.000,00', 
      category:{ 
        name: 'Vendas',
        icon: 'dollar-sign'
     },
     date:"13/04/2020",
    },
    {
      title:"Desenvolvimento de site",
      amount:'R$ 12.000,00',
      category:{
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date:"13/04/2020",
    },
    {
      title:"Desenvolvimento de site",
      amount:'R$ 12.000,00',
      category:{
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date:"13/04/2020",
    }
  ]
  
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
          <HighlightCard type='up' amount='R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril' title='Entrada' />
          <HighlightCard type='down' amount='R$ 1.259,00' lastTransaction='Última saída dia 03 de abril' title='Saídas' />
          <HighlightCard type='total' amount='R$ 16.400,00' lastTransaction='01 à 16 de abril' title='Total' />
      </HighlightCards>
     
     <Transactions>
       <Title>Listagem</Title>
       <TransactionList 
       data={data}
        renderItem={({item}) => <TransactionCard data={item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: getBottomSpace()}}
        />}
       />
       {/* <TransactionCard data={data[0]}/> */}
     </Transactions>
    </Container>
  )
}