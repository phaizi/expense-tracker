import {transactions} from '../App'
import { useContext } from "react"

export const useTransactions = ()=>{
    const context = useContext(transactions)
    if (context===undefined){
        throw new Error('useTransactions must be within context provider component')
    }
    return context
}