import { Action, } from '../services/types';
import './EditButtons.css';

export default function EditButtons(props: { id: number, dispatch: React.Dispatch<Action>, description: string, amount: number, setDesc: React.Dispatch<React.SetStateAction<string>>, setAmount: React.Dispatch<React.SetStateAction<number>> }) {

    const onEdit = (type: 'income' | 'expense') => {
        props.dispatch({ type: 'edit', id: props.id, kind: type, description: props.description, amount: props.amount });
        props.setDesc('');
        props.setAmount(0);
    }

    return (
        <div>
            <button onClick={() => {
                props.dispatch({ type: 'delete', id: props.id })
            }} className='Icon' > <i className="fas fa-trash-alt"></i></button>
            <button onClick={() => { onEdit('income') }} style={{ backgroundColor: 'green', width: '30%' }} ></button>
            <button onClick={() => { onEdit('expense') }} style={{ backgroundColor: 'red', width: '30%' }} ></button>
        </div>
    )
}