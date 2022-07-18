import { Card } from './styles'

export const TransactionCard = () => {
  return (
    <Card>
      <header>
        <p>Desenvolvimento de site</p>
        <span className="deposit">12 mil</span>
      </header>
      <div>
        <p>Trabalho</p>
        <span>12/12/2021</span>
      </div>
    </Card>
  )
}
