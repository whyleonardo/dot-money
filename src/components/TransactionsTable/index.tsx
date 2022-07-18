import { Container, MobileContainer, TableContainer, Title } from './styles'
import { TableHeader } from '../TableHeader'
import { TableItem } from '../TableItem'
import { TransactionCard } from '../TransactionCard'

export const TransactionsTable = () => {
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
