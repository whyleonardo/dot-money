import { useEffect } from 'react'

import axios from 'axios'

import { Container, MobileContainer, TableContainer, Title } from './styles'
import { TableHeader } from '../TableHeader'
import { TableItem } from '../TableItem'
import { TransactionCard } from '../TransactionCard'
import { api } from '../../services/api'

export const TransactionsTable = () => {
  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data))
  }, [])

  return (
    <>
      <Container>
        <TableContainer>
          <TableHeader />
          <TableItem />
          <TableItem />
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
