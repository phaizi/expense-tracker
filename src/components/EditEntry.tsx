// import react from 'react';
import './EditEntry.css';

export default function EditEntry(props: { description: string, amount: number, setDesc: React.Dispatch<React.SetStateAction<string>>, setAmount: React.Dispatch<React.SetStateAction<number>> }) {
    console.log('this is edit amoutn = ',props.amount)
    return (
        // <div className='TrFlex'>
        <div>
            <input
                onChange={(e) => { props.setDesc(e.currentTarget.value) }}
                value={props.description} type='text'
                className='EditDs'
                placeholder='Description' />
            <input
                onChange={(e) => {
                    const amt = parseInt(e.currentTarget.value);
                    if (amt >= 0) { props.setAmount(amt) }
                }}
                value={props.amount}
                type='number'
                className='EditAm'
                placeholder='Amount' />
            {/* <img src={greenicon}  className='Icon' alt='green'></img>
   <img src={redicon} className='Icon' alt='red'></img>  */}
            {/* <button style={{ backgroundColor: 'green' }} className='icon'></button>
                <button style={{ backgroundColor: 'red' }} className='icon'></button> */}
        </div>
    )
}