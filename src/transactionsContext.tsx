import {createContext, useState, useEffect, ReactNode} from 'react'
import {api}  from './services/api'



interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode; //aceita qualquer coisa
}

export const TransactionsContext = createContext<Transaction[]>([])//formato da informacao dentro do estado //lista de transactions

export function TransactionsProvider({children}: TransactionsProviderProps){
    
    const [transactions, setTransactions] = useState<Transaction[]>([])
    //o estado armazena um array de Transaction

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))//salvando os dados no estado
    }, [])

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}
