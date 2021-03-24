import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renders <App /> component', () => {
  it('Renders component', () => {
    render(<App />);
    expect(screen.queryByText(/Learning Unit Test/)).toBeInTheDocument();
  })
});
