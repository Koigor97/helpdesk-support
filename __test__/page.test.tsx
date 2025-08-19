import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Login from '@/app/[tenant]/(auth)/page'
 
describe('Page', () => {
  it('renders a heading', () => {
    // @ts-ignore
    render(<Login searchParams={undefined} />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})