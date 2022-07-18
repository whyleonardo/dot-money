import { ArrowCircleUp } from 'phosphor-react'

import { Container } from './styles'

export const Card = () => {
  return (
    <Container>
      <header>
        <p>Entradas</p>
        <ArrowCircleUp size={32} />
      </header>
      <strong>1000 conto</strong>
    </Container>
  )
}
