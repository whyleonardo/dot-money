import { useEffect, useState } from 'react'

import axios from 'axios'

import { Container, MobileContainer, TableContainer, Title } from './styles'
import { TableHeader } from '../TableHeader'
import { TableItem } from '../TableItem'
import { TransactionCard } from '../TransactionCard'
import { api } from '../../services/api'

interface Trasaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Trasaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <>
      <Container>
        <TableContainer>
          <TableHeader />
          {transactions.map(transaction => (
            <TableItem
              key={transaction.id}
              title={transaction.title}
              type={transaction.type}
              category={transaction.category}
              amount={transaction.amount}
              createdAt={transaction.createdAt}
            />
          ))}
        </TableContainer>
      </Container>
      <MobileContainer>
        <Title>
          <span>Listagem</span>
          <p>1 item</p>
        </Title>
        <TransactionCard />
        <TransactionCard />
      </MobileContainer>
    </>
  )
}
