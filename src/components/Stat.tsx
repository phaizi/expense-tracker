// import react from 'react';
import './Stat.css'

export default function Stat(props:{title: string, amount: number, color:string}){
    return (
        <div className='Stat' style={{backgroundColor:props.color}}>
            {props.title}
            <br/>
          {props.amount}
        </div>
    )
}