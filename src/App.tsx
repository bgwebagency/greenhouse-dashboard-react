import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/gallery:fruitName' element={<Details />} />
					{/* Redirect from / to login */}
					<Route path='/' element={<Navigate to='/login' replace />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
