import { useTransactions } from '../services/customHooks';
import Stat from './Stat';

export default function Display() {
    const [state] = useTransactions()
    return (
        <div style={{padding:'10px 0px'}}
        >
            <Stat title='Income' amount={state.income} color='green'/>
            <Stat title='Balance' amount={state.income - state.expense} color='orange'/>
            <Stat title='Expense' amount={state.expense} color='red'/>
        </div>
    )
}