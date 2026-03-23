import type { UserType } from "#/types/user.types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

type UserCardProps = {user: UserType}
    


export default function UserCard({user: u}: UserCardProps) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{u.name}</CardTitle>
        </CardHeader>

        <CardContent>
            {u.email}
        </CardContent>

        <CardFooter>

        </CardFooter>
    </Card>
  )
}
