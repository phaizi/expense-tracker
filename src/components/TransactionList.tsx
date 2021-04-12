import  { useState } from 'react';
import './TransactionList.css'
import EditEntry from './EditEntry';
import EditButtons from './EditButtons';

const Transactions = [{ description: 'abc', amount: 1234, id:'qwe0'},
{ description: 'qwer', amount: 56491000, id:'qwe1' },
{ description: 'asdf', amount: 14604, id:'qwe2'},
{ description: 'zxcv', amount: 94671, id:'qwe3'},
{ description: 'yuio', amount: 6645, id:'qwe4' },
{ description: 'qwer', amount: 56491, id:'qwe5' },
{ description: 'asdf', amount: 14604, id:'qwe6' },
{ description: 'zxcv', amount: 94671, id:'qwe7' },
{ description: 'qwer', amount: 56491, id:'qwe8' },
{ description: 'asdf', amount: 14604, id:'qwe9' },
{ description: 'zxcv', amount: 94671, id:'qwe10' },
{ description: 'qwer', amount: 56491, id:'qwe11' },
{ description: 'asdf', amount: 14604, id:'qwe12' },
{ description: 'zxcv', amount: 94671, id:'qwe13' },
{ description: 'qwer', amount: 56491, id:'qwe14' },
{ description: 'asdf', amount: 14604, id:'qwe15' },
{ description: 'zxcv', amount: 94671, id:'qwe16' },
{ description: 'qwer', amount: 56491, id:'qwe17' },
{ description: 'asdf', amount: 14604, id:'qwe18' },
{ description: 'zxcv', amount: 94671, id:'qwe19' },]

export default function TransactionList() {

    const [editId, setId] = useState('');
    return (
        <div
            className='TrContainer'
        >
            Transactions
            <hr />
            
            <div className='TrFlex'>
                <div onClick={(e) => {
                    if (editId===''){
                    const target = e.target as Element ;

                    setId(target.id)
                console.log('id is = ', target.id)
            }}} className='Description'>
                    {Transactions.map((tr, index) => editId===tr.id?<EditEntry key={tr.id}/>:<div id={tr.id} className='DsItem' key={tr.id}>{tr.description}</div>)}
                </div>
                <div className='Amount'>
                    {Transactions.map((tr, index) => editId===tr.id?<EditButtons key={tr.id}/>:<div key={tr.id}>{tr.amount}</div>)}
                </div>
            </div>
        </div>
    )
}