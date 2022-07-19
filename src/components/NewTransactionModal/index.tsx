import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import {
  CloseButton,
  Container,
  HeaderContainer,
  RadioBox,
  TransactionTypeContainer
} from './styles'

import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { api } from '../../services/api'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const [type, setType] = useState('deposit')

  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
  }

  const data = {
    title,
    value,
    category,
    type
  }

  // api.post('/transactions', data)

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

      <Container onSubmit={handleCreateNewTransaction}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />

        <input
          value={value}
          onChange={e => setValue(Number(e.target.value))}
          type="number"
          placeholder="Valor"
        />

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

        <input
          value={category}
          onChange={e => setCategory(e.target.value)}
          type="text"
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
