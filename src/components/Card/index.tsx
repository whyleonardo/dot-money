import { ArrowCircleUp } from 'phosphor-react'
import { ReactNode } from 'react'
import { Container } from './styles'

interface CardProps {
  children: ReactNode
  title: string
  className?: string
  amount: number
}

export const Card = ({ children, className, title, amount }: CardProps) => {
  return (
    <Container className={className}>
      <header>
        <p>{title}</p>
        {children}
      </header>
      <strong>
        {' '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(amount)}
      </strong>
    </Container>
  )
}
