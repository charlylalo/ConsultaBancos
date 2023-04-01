import React from 'react'
import { Bank } from '../interfaces/interfaces'

import { ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/base';

interface Props{
  bank: Bank
}

export default function ListCard({bank}: Props): JSX.Element{

  return(
    <>
      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{uri: bank.url}}
        />
       <ListItem.Content>
          <ListItem.Title>{bank.bankName}</ListItem.Title>
          <ListItem.Subtitle>{bank.description}</ListItem.Subtitle>
          <ListItem.Subtitle>Con {bank.age} años de servicio</ListItem.Subtitle>
       </ListItem.Content>
      </ListItem>
    </>
  )
}