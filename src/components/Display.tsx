// import react from 'react';
import Stat from './Stat';

export default function Display() {
    return (
        <div style={{padding:'10px 0px'}}
        // style={{ padding:'20px 10px'}}
        >
            <Stat title='Income' amount={1200000} color='green'/>
            <Stat title='Balance' amount={1000} color='orange'/>
            <Stat title='Expense' amount={1500} color='red'/>
        </div>
    )
}