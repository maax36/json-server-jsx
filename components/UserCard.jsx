import styles from '../styles/usercard.module.css';

export function UserCard({ users, setAction }) {
    return (
        <>
            {users.toReversed().map((user) => {
                const { id, name, username, email, phone } = user;

                return (
                    <fieldset className={styles.userCard} key={id}>
                        <legend>User: {name} (ID №{id})</legend>
                        <div 
                            className={styles.delete}
                            onClick={() => setAction({ type: "del", id })}
                        >
                            [X]
                        </div>

                        <div>UserName: <span>{username}</span></div>
                        <div>Email: <span>{email}</span></div>
                        <div>Phone: <span>{phone}</span></div>
                    </fieldset>
                );
            })}
        </>
    );
}