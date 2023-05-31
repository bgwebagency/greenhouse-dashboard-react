import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from 'App'
import renderWithProviders from 'testUtils'

describe('<App />', () => {
	it('renders', async () => {
		window.history.pushState({}, 'Home', '/')
		renderWithProviders(<App />, false)

		await expect(screen.findByText('Login')).resolves.toBeInTheDocument()
		await userEvent.click(screen.getByText('Login'))

		await expect(
			screen.findByText('Forgot your password?')
		).resolves.toBeInTheDocument()
	})
})
