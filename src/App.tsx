import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard"
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'


Modal.setAppElement("#root")

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}></Header>
      <Dashboard></Dashboard>
      


      <GlobalStyle></GlobalStyle>
    </>
  );
}


