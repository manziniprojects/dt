import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext, TransactionsProvider } from '../../transactionsContext';

export function Summary() {

    const TransactionsProvider = useContext(TransactionsContext)

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>
                    
               </strong>
            </div>

            <div >
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="" />
                </header>
                <strong>
                     - R$500,00
               </strong>
            </div>

            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>
                    R$500,00
               </strong>
            </div>
        </Container>
    )
}