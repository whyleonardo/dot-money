import { useEffect, useState } from 'react'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyCircleDollar
} from 'phosphor-react'
import { Card } from '../Card'

import { Container } from './styles'

export const Summary = () => {
  return (
    <>
      <Container>
        <Card />

        <Card />

        <Card />
      </Container>
    </>
  )
}
