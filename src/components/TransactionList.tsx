import  { useEffect, useState } from 'react';
import './TransactionList.css'
import EditEntry from './EditEntry';
import EditButtons from './EditButtons';
import { useTransactions } from '../services/customHooks';

// const Transactions = [{ description: 'abc', amount: 1234, id:'qwe0'},
// { description: 'qwer', amount: 56491000, id:'qwe1' },
// { description: 'asdf', amount: 14604, id:'qwe2'},
// { description: 'zxcv', amount: 94671, id:'qwe3'},
// { description: 'yuio', amount: 6645, id:'qwe4' },
// { description: 'qwer', amount: 56491, id:'qwe5' },
// { description: 'asdf', amount: 14604, id:'qwe6' },
// { description: 'zxcv', amount: 94671, id:'qwe7' },
// { description: 'qwer', amount: 56491, id:'qwe8' },
// { description: 'asdf', amount: 14604, id:'qwe9' },
// { description: 'zxcv', amount: 94671, id:'qwe10' },
// { description: 'qwer', amount: 56491, id:'qwe11' },
// { description: 'asdf', amount: 14604, id:'qwe12' },
// { description: 'zxcv', amount: 94671, id:'qwe13' },
// { description: 'qwer', amount: 56491, id:'qwe14' },
// { description: 'asdf', amount: 14604, id:'qwe15' },
// { description: 'zxcv', amount: 94671, id:'qwe16' },
// { description: 'qwer', amount: 56491, id:'qwe17' },
// { description: 'asdf', amount: 14604, id:'qwe18' },
// { description: 'zxcv', amount: 94671, id:'qwe19' },]

export default function TransactionList() {

    const [state,] = useTransactions();
    const [editId, setId] = useState(0);
    useEffect(()=>{
        document.querySelector('html')?.addEventListener('click',(e)=>{
            console.log('its working with = ',e);
            setId(0);  
        })
    },[])
    return (
        <div
            className='TrContainer'
        >
            Transactions
            <hr />
            
            <div className='TrFlex'>
                <div onClick={(e) => {
                    e.stopPropagation();
                    if (editId===0){
                    const target = e.target as Element ;

                    setId(parseInt(target.id))
                console.log('id is = ', target.id)
            }}} className='Description'>
                    {state.entries.map((tr, index) => 
                    editId===tr.id?<EditEntry key={tr.id}/>:
                    <div 
                    id={tr.id+''} 
                    className='DsItem' 
                    key={tr.id}
                    >{tr.description}</div>)}
                </div>
                <div className='Amount'>
                    {state.entries.map((tr, index) => 
                    editId===tr.id?<EditButtons key={tr.id}/>:
                    <div 
                    style={{backgroundColor:(tr.amount===0)?'orange':(tr.type==='income')?'green':'red', color:'white'}}
                    key={tr.id}
                    >{tr.amount}</div>)}
                </div>
            </div>
        </div>
    )
}