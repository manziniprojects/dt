
import { api } from '../../services/api'
import { Container } from './styles'
import { useState, useEffect } from 'react'

//formato da informacao dentro do estado
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    //o estado armazena um array de Transaction

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))//salvando os dados no estado
    }, [])

    return (

        <Container>
            <table>
                <thead>
                    <tr>
                        <th> Título</th>
                        <th> Valor </th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>

                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}> {transaction.amount}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        );

                    })}



                </tbody>
            </table>
        </Container>


    )


}