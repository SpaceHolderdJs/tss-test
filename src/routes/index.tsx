import { createFileRoute } from '@tanstack/react-router'
import NikeLanding from '../components/nike/NikeLanding'

export const Route = createFileRoute('/')({ component: App, ssr: true })

function App() {
  return <NikeLanding />
}
