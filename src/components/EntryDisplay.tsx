// import react, { MouseEventHandler } from 'react';
import './EntryDisplay.css';

export default function EntryDisplay() {
    return (
        <div className='EntryContainer'>
            Add Transaction
            <hr/>
            <div >
                <div className='input'
                // style={{display:'flex', flexWrap:'wrap',
                // justifyContent: 'start', padding:'10px 0px',textAlign: 'right'}}
                >
                    <label htmlFor="tname" className='Label'>Description</label>
                    <input type="text" id="tname" ></input>
                </div>
                <div className='input'
                // style={{display:'flex', flexWrap:'wrap',
                // justifyContent: 'start', padding:'10px 0px',textAlign: 'left'}}
                >
                    <label htmlFor="tamount" className='Label'>Amount</label>
                    <input id='tamount' type='number'></input>
                </div> 
            </div>
                <div>
                <button  onClick={(e)=>{console.log('this is button = ',(e.target as Element).getAttribute('key'))}} style={{backgroundColor:'green'}}>Income</button>
                <button  style={{backgroundColor:'red'}}>Expense</button>
                </div> 
        </div>
    )
}