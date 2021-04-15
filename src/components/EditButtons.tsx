import { Action, } from '../services/types';
import './EditButtons.css';

export default function EditButtons(props: { id: number, dispatch: React.Dispatch<Action>, description: string, amount: number, setDesc: React.Dispatch<React.SetStateAction<string>>, setAmount: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div>
            <button className='Icon' > <i className="fas fa-trash-alt"></i></button>
            <button onClick={() => {
                props.dispatch({ type: 'edit', id: props.id, kind: 'income', description: props.description, amount: props.amount });
                props.setDesc('');
                props.setAmount(0);
            }} style={{ backgroundColor: 'green', width: '30%' }} ></button>
            <button onClick={() => {
                props.dispatch({ type: 'edit', id: props.id, kind: 'expense', description: props.description, amount: props.amount });
                props.setDesc('');
                props.setAmount(0);
            }} style={{ backgroundColor: 'red', width: '30%' }} ></button>
        </div>
    )
}