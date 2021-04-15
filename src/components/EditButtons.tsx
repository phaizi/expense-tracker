import './EditButtons.css';

export default function EditButtons() {
    return (
        <div>
            <button className='Icon' > <i className="fas fa-trash-alt"></i></button>
            <button style={{ backgroundColor: 'green',width:'30%'}} ></button>
            <button style={{ backgroundColor: 'red', width:'30%'}} ></button>
        </div>
    )
    }