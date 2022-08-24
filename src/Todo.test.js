import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './components/Todo'

test('should render todo component', () => {
    render(<Todo />);
    const TodoElement = screen.getByTestId('todo-1');
    expect(TodoElement).toBeInTheDocument();
    expect(TodoElement).toHaveTextContent('Acheter des fruits');
});

test('should render todo component 2', () => {
    render(<Todo />);
    const TodoElement = screen.getByTestId('todo-2');
    expect(TodoElement).toBeInTheDocument();
    expect(TodoElement).toHaveTextContent('Coder une application');
});