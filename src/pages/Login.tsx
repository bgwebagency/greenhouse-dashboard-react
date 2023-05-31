import { Link } from 'react-router-dom'

import { Button, Input, Label } from 'greenhouse-react-ui'
import ImageDark from '../assets/img/login-dark.jpg'
import ImageLight from '../assets/img/login-light.jpg'
import { GithubIcon, TwitterIcon } from '../icons'

function Login(): JSX.Element {
	return (
		<div className='flex min-h-screen items-center bg-gray-50 p-6 dark:bg-gray-900'>
			<div className='mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800'>
				<div className='flex flex-col overflow-y-auto md:flex-row'>
					<div className='h-32 md:h-auto md:w-1/2'>
						<img
							aria-hidden='true'
							className='h-full w-full object-cover dark:hidden'
							src={ImageLight}
							alt='Office'
						/>
						<img
							aria-hidden='true'
							className='hidden h-full w-full object-cover dark:block'
							src={ImageDark}
							alt='Office'
						/>
					</div>
					<main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
						<div className='w-full'>
							<h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
								Login
							</h1>
							<form>
								<Label className='block text-sm text-gray-700 dark:text-gray-400'>
									<span>Email</span>
									<Input
										className='mt-1'
										type='email'
										placeholder='john@doe.com'
										autoComplete='username'
									/>
								</Label>

								<Label className='mt-4 block text-sm text-gray-700 dark:text-gray-400'>
									<span>Password</span>
									<Input
										className='mt-1'
										type='password'
										placeholder='***************'
										autoComplete='current-password'
									/>
								</Label>

								<Button className='mt-4' block>
									Log in
								</Button>
							</form>

							<hr className='my-8' />

							<Button block layout='outline'>
								<GithubIcon className='mr-2 h-4 w-4' aria-hidden='true' />
								Github
							</Button>
							<Button className='mt-4' block layout='outline'>
								<TwitterIcon className='mr-2 h-4 w-4' aria-hidden='true' />
								Twitter
							</Button>

							<p className='mt-4'>
								<Link
									className='text-sm font-medium text-primary-shade70 hover:underline dark:text-primary-shade60'
									to='/forgot-password'
								>
									Forgot your password?
								</Link>
							</p>
							<p className='mt-1'>
								<Link
									className='text-sm font-medium text-primary-shade70 hover:underline dark:text-primary-shade60'
									to='/create-account'
								>
									Create account
								</Link>
							</p>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Login
