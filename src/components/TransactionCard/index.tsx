import { Card } from './styles'

interface TransactionCardProps {
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export const TransactionCard = ({
  title,
  type,
  category,
  amount,
  createdAt
}: TransactionCardProps) => {
  return (
    <Card>
      <header>
        <p>{title}</p>
        <span className={type}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(amount)}
        </span>
      </header>
      <div>
        <p>{category}</p>
        <span>{new Intl.DateTimeFormat('pt-BR').format(new Date())}</span>
      </div>
    </Card>
  )
}
