import { useState } from "react";
import { UserCard } from "@/components/UserCard";
import { UserGet } from "@/components/UserGet";
import { AddForm } from "@/components/AddForm";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [action, setAction] = useState(null);

  return (
    <main>
      <AddForm setAction={setAction}/>
      <UserGet setUsers={setUsers} action={action} />
      <UserCard users={users} setAction={setAction} />
    </main>
  );
}
