import { createContext, useState, useEffect, ReactNode, useContext } from 'react'
import { api } from '../services/api'



interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //herda os dados da interface omitindo id e criatedAt

interface TransactionsProviderProps {
    children: ReactNode; //aceita qualquer coisa
}

interface TransactionsContextData {
    transactions: Transaction[]
    createTransaction: (transaction: TransactionInput) => Promise<void>
    
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData

)//formato da informacao dentro do estado //lista de transactions

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    //o estado armazena um array de Transaction

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))//salvando os dados no estado
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        //salva os dados na variavel data - //recebe uma transacao do tipo de criacao transaction input

        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),

        }) //faz a chamada a api  //como é assincrona retorna uma promisse
        const { transaction } = response.data
        setTransactions([ //copia todas as infos que já estao no vetor e adiciona a outra no final
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>{/*chaves duplicados, pq é um js dentro e um objeto*/}
                 {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)
    return context
}
