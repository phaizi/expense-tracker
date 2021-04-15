import { useEffect, useState } from 'react';
import './TransactionList.css'
import EditEntry from './EditEntry';
import EditButtons from './EditButtons';
import { useTransactions } from '../services/customHooks';

export default function TransactionList() {

    const [state, dispatch] = useTransactions();
    const [editId, setId] = useState(0);
    const [newDescription, setDescription] = useState('');
    const [newAmount, setAmount] = useState(0)

    useEffect(() => {
        document.querySelector('html')?.addEventListener('click', (e) => {
            setId(0);
        })
    }, [])

    return (
        <div className='TrContainer'>
            Transactions
            <hr />
            <div className='TrFlex'>
                <div onClick={(e) => {
                    e.stopPropagation();
                    const target = e.target as Element;
                    if (target.localName === 'div') {
                        setId(parseInt(target.id));
                        setDescription(target.innerHTML);
                        setAmount(0); // this is done becoz when we edit the amount n dont confirm
                        //  instead click somewhere else then again when we click that item it will show 
                        // that previous unconfirmed amount
                    }
                }} className='Description'>
                    {state.entries.map((tr) =>
                        editId === tr.id ? <EditEntry description={newDescription} setDesc={setDescription} amount={newAmount} setAmount={setAmount} key={tr.id} /> :
                            <div id={tr.id + ''} className='DsItem' key={tr.id} >{tr.description}</div>)}
                </div>
                <div className='Amount'>
                    {state.entries.map((tr, index) =>
                        editId === tr.id ? <EditButtons id={tr.id} dispatch={dispatch} description={newDescription} amount={newAmount} setDesc={setDescription} setAmount={setAmount} key={tr.id} /> :
                            <div style={{ backgroundColor: (tr.amount === 0) ? 'orange' : (tr.type === 'income') ? 'green' : 'red', color: 'white' }} key={tr.id} >{tr.amount}</div>)}
                </div>
            </div>
        </div>
    )
}