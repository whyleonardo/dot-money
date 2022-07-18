import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header/index'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  )
}
