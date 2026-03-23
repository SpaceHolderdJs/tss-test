import UserCard from '#/components/users/UserCard';
import type { UserType } from '#/types/user.types';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
    component: RouteComponent,

    onEnter: () => {console.log(("Enter"))},

    onLeave: () => {alert("Leave")},

    errorComponent: () => <div>Error</div>,

    loader: async () => {
        const uJson = await fetch("https://jsonplaceholder.typicode.com/users");
        throw new Error("Simulated loader error");
        return await uJson.json()
    },
})

function RouteComponent() {
    const users: UserType[] = Route.useLoaderData();

    console.log(users)
    
    return <div className='flex flex-col gap-3 mt-3'>
        {users.map((u) => <UserCard key={u.id} user={u} />)}
    </div>
}
