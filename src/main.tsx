import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from 'App'
import { GreenHouse } from 'greenhouse-react-ui'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

registerSW()

const MAX_RETRIES = 1
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES
		}
	}
})

const container = document.querySelector('#root')
if (container) {
	const root = createRoot(container)
	root.render(
		<GreenHouse>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</GreenHouse>
	)
}
