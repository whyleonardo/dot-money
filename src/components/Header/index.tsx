import { MouseEventHandler, useState } from 'react'

import { Logo } from '../Logo'
import { ButtonHeader, Container, Content } from './styles'
import Modal from 'react-modal'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <Logo />
        <ButtonHeader onClick={onOpenNewTransactionModal} type="button">
          Nova Transação
        </ButtonHeader>
      </Content>
    </Container>
  )
}
