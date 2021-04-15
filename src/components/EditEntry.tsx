import './EditEntry.css';

export default function EditEntry(props: { description: string, amount: number, setDesc: React.Dispatch<React.SetStateAction<string>>, setAmount: React.Dispatch<React.SetStateAction<number>> }) {
    return (
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
        </div>
    )
}