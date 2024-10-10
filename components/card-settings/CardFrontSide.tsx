import React from 'react'
import { CardType } from './card_type'

interface IData {
    data: CardType,
}

export const CardFrontSide: React.FC<IData> = (props: IData) => {
  return (
    <div className='text-sm'>{JSON.stringify(props.data)}</div>
  )
}