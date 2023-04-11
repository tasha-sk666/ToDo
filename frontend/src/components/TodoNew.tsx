import { observer } from 'mobx-react-lite';
import { store } from "../store";
import { useState } from 'react';
import {default as UUID} from "node-uuid";


function TodoNew(): JSX.Element {

    const [title, setTitle] = useState('')


    const addClickHandler = () => {
        const id = UUID.v4();
        console.log(id)
        store.addTodo({id: id, title: title})
        setTitle('');
    }

    return (

            <div className='todo__form'>
                <label className="todo__field">
                    <input
                        className="todo__input" 
                        type="text" 
                        name="title" 
                        placeholder="Add new todo here..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <button className="btn-reset btn" onClick={addClickHandler}>Add todo</button>
            </div>

    );
}

export default observer(TodoNew)
