declare module '*.svg' {
	const React = await import('react')

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>
	const source: string
	export default source
}
