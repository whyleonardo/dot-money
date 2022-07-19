import { Container, MobileContainer, TableContainer, Title } from './styles'
import { TableHeader } from '../TableHeader'
import { TableItem } from '../TableItem'
import { TransactionCard } from '../TransactionCard'
import { useTransactions } from '../../hooks/useTransactions'

export const TransactionsTable = () => {
  const { transactions } = useTransactions()
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
        {transactions.map(transaction => (
          <TransactionCard
            key={transaction.id}
            title={transaction.title}
            type={transaction.type}
            category={transaction.category}
            amount={transaction.amount}
            createdAt={transaction.createdAt}
          />
        ))}
      </MobileContainer>
    </>
  )
}
