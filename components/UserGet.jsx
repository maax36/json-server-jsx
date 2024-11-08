import { useEffect } from "react";

export function UserGet({ setUsers, action }) {
    let link = new URL('http://localhost:3333/users');
    let method = "GET";
    let body = null;

    switch (action?.type) {
        case 'del':
            link = new URL(`http://localhost:3333/users/${action.id}`);
            method = "DELETE";
            break;
        case 'add':
            method = "POST";
            body = JSON.stringify({
                username: action.username,
                email: action.email,
                address: action.address,
                phone: action.phone,
            });
            break;
    }

    useEffect(() => {
        async function fetcher() {
            const options = {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: body
            };

            try {
                const response = await fetch(link, options);

                if (action?.type === "del") {
                    setUsers((prevUsers) => prevUsers.filter(user => user.id !== action.id));
                } else if (action?.type === "add") {
                    const newUser = {
                        username: action.username,
                        email: action.email,
                        address: action.address,
                        phone: action.phone
                    };
                    setUsers((prevUsers) => [...prevUsers, newUser]);
                } else {
                    const data = await response.json();
                    setUsers(data);
                }
            } catch (error) {
                console.error("Error fetch:", error);
            }
        }

        fetcher();
    }, [setUsers, action]);
}