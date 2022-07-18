import { Container } from './styles'
import { LogoTitle } from './styles'

import { Wallet } from 'phosphor-react'

export const Logo = () => {
  return (
    <Container>
      <Wallet size={32} color={'var(--shape)'} />
      <LogoTitle>.money</LogoTitle>
    </Container>
  )
}
