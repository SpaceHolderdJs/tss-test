import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
    component: RouteComponent,
    loader: async () => {
        const uJson = await fetch("https://jsonplaceholder.typicode.com/users");
        return await uJson.json()
    }
})

function RouteComponent() {
    const users = Route.useLoaderData();

    console.log(users)
    return <div>Hello "/users"!</div>
}
