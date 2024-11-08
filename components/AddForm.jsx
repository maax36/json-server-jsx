import { useState } from 'react';
import styles from '../styles/addform.module.css';

export function AddForm({ setAction }) {
    const
        [username, setUsername] = useState(null),
        [email, setEmail] = useState(null),
        [phone, setPhone] = useState(null);

        const Submit = () => {
            setAction({ type: "add", username, email, phone });
        };

    return (
        <div className={styles.form}>
            <label>UserName:<input type="text" onChange={(e) => { setUsername(e.target.value) }} /></label>
            <label>Email:<input type="text" onChange={(e) => { setEmail(e.target.value) }} /></label>
            <label>Phone:<input type="text" onChange={(e) => { setPhone(e.target.value) }} /></label>

            <button onClick={Submit}>Добавить</button>
        </div>
    );
};