// import react from 'react';
import './EditEntry.css';

export default function EditEntry() {
    return (
        // <div className='TrFlex'>
        <div>
                <input type='text' 
                className='EditDs' 
                placeholder='Description' />
                <input type='number' 
                className='EditAm' 
                placeholder='Amount' />
                {/* <img src={greenicon}  className='Icon' alt='green'></img>
   <img src={redicon} className='Icon' alt='red'></img> */}
                {/* <button style={{ backgroundColor: 'green' }} className='icon'></button>
                <button style={{ backgroundColor: 'red' }} className='icon'></button> */}
            </div>
    )
}