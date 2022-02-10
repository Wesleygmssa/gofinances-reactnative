import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
background: ${({theme, type}) => 
type === 'total' ? theme.colors.secondary : theme.colors.shape};
width: ${RFValue(300)}px;
border-radius: 5px;
padding: 19px 23px;
padding-bottom:  ${RFValue(42)}px;
margin-right: ${RFValue(20)}px;
`;


export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; //flex-start, center, flex-end
`;

export const Title = styled.Text<TypeProps>`
 font-family:${props => props.theme.fonts.regular};
 font-size: ${RFValue(14)}px;
 /* color: ${props => props.theme.colors.text_dark}; */

 color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
 font-size: ${RFValue(40)}px;
 ${props => props.type === 'up' && css`
  color: ${props => props.theme.colors.success};
 `};

 ${props => props.type === 'down' && css`
 color: ${props => props.theme.colors.attention};
  `};

  ${props => props.type === 'total' && css`
  color: ${props => props.theme.colors.shape};
  `};
`;

export const Footer = styled.View`

`;

export const Amount = styled.Text<TypeProps>`
  font-family:${props => props.theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  /* color: ${props => props.theme.colors.text_dark}; */
  margin-top: ${RFValue(38)}px;
`;

export const LastTransaction = styled.Text<TypeProps>`
 font-family:${props => props.theme.fonts.regular};
 font-size: ${RFValue(12)}px;
 /* color: ${props => props.theme.colors.text}; */
 color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text};

`;






