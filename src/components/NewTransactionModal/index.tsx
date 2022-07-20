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
import { useTransactions } from '../../hooks/useTransactions'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const { createTransaction, transactions } = useTransactions()

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    if (title != '' && amount > 0 && category != '') {
      await createTransaction({
        title,
        type,
        category,
        amount
      })

      setTitle('')
      setAmount(0)
      setCategory('')
      setType('deposit')

      onRequestClose()
    } else {
      alert('Preencha todos os campos!')
    }
  }

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
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
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
