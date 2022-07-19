import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

test('renders learn react link', () => {
  render(<Router><App /></Router>)
  const welcomeMsg = "Welcome to my shop"
  expect(screen.getByText(welcomeMsg)).toBeInTheDocument()
})
