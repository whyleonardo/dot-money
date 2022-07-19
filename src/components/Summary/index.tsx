import { useTransactions } from '../../hooks/useTransactions'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyCircleDollar
} from 'phosphor-react'

import { Card } from '../Card'
import { Container } from './styles'

export const Summary = () => {
  const { transactions } = useTransactions()

  return (
    <>
      <Container>
        <Card
          title="Entradas"
          children={<ArrowCircleUp color={'var(--green)'} size={32} />}
        />

        <Card
          title="Saídas"
          children={<ArrowCircleDown color={'var(--red)'} size={32} />}
        />

        <Card
          title="Total"
          className="highlight-background"
          children={<CurrencyCircleDollar color={'var(--shape)'} size={32} />}
        />
      </Container>
    </>
  )
}
