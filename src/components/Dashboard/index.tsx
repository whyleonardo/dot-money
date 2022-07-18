import { Summary } from '../Summary'
import { Container } from './styles'
import { TransactionsTable } from '../TransactionsTable/index'

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}
