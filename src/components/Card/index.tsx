import { ArrowCircleUp } from 'phosphor-react'
import { ReactNode } from 'react'
import { Container } from './styles'

interface CardProps {
  children: ReactNode
  title: string
  className?: string
}

export const Card = ({ children, className, title }: CardProps) => {
  return (
    <Container className={className}>
      <header>
        <p>{title}</p>
        {children}
      </header>
      <strong>1000 conto</strong>
    </Container>
  )
}
