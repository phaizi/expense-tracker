import { useState } from 'react';
import { useTransactions } from '../services/customHooks';
import './EntryDisplay.css';

export default function EntryDisplay() {

    const [description, setDesc] = useState('');
    const [amount, setAmt] = useState(0);
    const [id, setId] = useState(1);
    const [, dispatch] = useTransactions();
    const [isInputValid, setValid] = useState(true);
    const reset = () => {
        setAmt(0);
        setDesc('');
        setValid(true);
    }

    const clickHandle = (type: 'income' | 'expense') => {
        if (description === '') {
            setValid(false);
        }
        else {
            dispatch({ type: 'submit', entry: { description, amount, type, id } });
            setId((id) => id + 1);
            reset();
        }
    }

    return (
        <div className='EntryContainer'>
            Add Transaction
            <hr />
            <div >
                <div className='input'>
                    <div className="error" style={{ display: isInputValid ? 'none' : 'block' }} id="nameError">Description cannot be empty *</div>
                    <label htmlFor="tname" className='Label'>Description</label>
                    <input type="text" onChange={(e) => { setDesc(e.target.value) }} value={description} id="tname" ></input>
                </div>
                <div className='input'>
                    <label htmlFor="tamount" className='Label'>Amount</label>
                    <input onChange={(e) => {
                        const amt = parseInt(e.target.value);
                        if (amt >= 0) { setAmt(amt) }
                    }} value={amount} id='tamount' type='number'></input>
                </div>
            </div>
            <div>
                <button onClick={() => { clickHandle('income') }} style={{ backgroundColor: 'green' }}>Income</button>
                <button onClick={() => { clickHandle('expense') }} style={{ backgroundColor: 'red' }}>Expense</button>
            </div>
        </div>
    )
}