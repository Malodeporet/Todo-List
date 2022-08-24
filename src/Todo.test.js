import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './components/Todo'

test('should render todo component', () => {
    render(<Todo />);
    const TodoElement = screen.getByTestId('todo-1');
    expect(TodoElement).toBeInTheDocument();
    expect(TodoElement).toHaveTextContent('Acheter des fruits');
    const ch1 = screen.getByTestId('checkbox-1');
    expect(ch1.checked).toEqual(false);
    fireEvent.click(ch1);
    expect(ch1.checked).toEqual(true);

});

test('should render todo component 2', () => {
    render(<Todo />);
    const TodoElement = screen.getByTestId('todo-2');
    expect(TodoElement).toBeInTheDocument();
    expect(TodoElement).toHaveTextContent('Coder une application');
    const ch2 = screen.getByTestId('checkbox-2');
    expect(ch2.checked).toEqual(false)
    fireEvent.click(ch2)
    expect(ch2.checked).toEqual(true)
});