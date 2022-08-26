import '@testing-library/jest-dom/extend-expect';
import Button from './components/Button';
import { useState } from './components/Button';
import { renderHook, act } from '@testing-library/react-hooks'

// Le hook fonctionne comme cela
// const [openModal, setOpenModal] = useState(false);
test('useState Modal', function () {
    const { result } = renderHook(() => useState(false))
    expect(result.current[0]).toBeFalsy()
    act(() => result.current[1]())
    expect(result.current[0]).toBeTruthy()
    act(() => result.current[1]())
    expect(result.current[0]).toBeFalsy()
})