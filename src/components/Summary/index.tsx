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

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  )

  return (
    <>
      <Container>
        <Card
          title="Entradas"
          amount={summary.deposits}
          children={<ArrowCircleUp color={'var(--green)'} size={32} />}
        />

        <Card
          title="Saídas"
          amount={summary.withdraws}
          children={<ArrowCircleDown color={'var(--red)'} size={32} />}
        />

        <Card
          title="Total"
          className={
            summary.total >= 0 ? 'highlight-background' : 'highlight-red'
          }
          amount={summary.total}
          children={<CurrencyCircleDollar color={'var(--shape)'} size={32} />}
        />
      </Container>
    </>
  )
}
