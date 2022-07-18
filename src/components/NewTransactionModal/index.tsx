import { useState } from 'react'
import Modal from 'react-modal'

import {
  CloseButton,
  Container,
  HeaderContainer,
  RadioBox,
  TransactionTypeContainer
} from './styles'

import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <HeaderContainer>
        <h2>Cadastrar Transação</h2>
        <CloseButton onClick={onRequestClose} type="button">
          <X size={24} />
        </CloseButton>
      </HeaderContainer>

      <Container>
        <input type="text" placeholder="Título" />
        <input type="number" pattern="[0-9]*" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <ArrowCircleUp size={28} color={'var(--green)'} />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <ArrowCircleDown size={28} color={'var(--red)'} />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
