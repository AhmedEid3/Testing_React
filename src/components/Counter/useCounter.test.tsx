import { act, renderHook } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should count to be zero initial value', () => {
    const { result } = renderHook(useCounter);

    expect(result.current.counter).toBe(0);
  });

  it('should count to be 10 after set initial value', () => {
    const { result } = renderHook(useCounter, { initialProps: 20 });

    expect(result.current.counter).toBe(20);
  });

  it('should count to be 1 after call increment', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.handleIncrement();
    });

    expect(result.current.counter).toBe(1);
  });

  it('should count to be 10 after call decrement with initial value 11', () => {
    const { result } = renderHook(() => useCounter(11));

    act(() => {
      result.current.handleDecrement();
    });

    expect(result.current.counter).toBe(10);
  });

  it('should count to be 7 after call set method', () => {
    const { result } = renderHook(() => useCounter(200));

    act(() => {
      result.current.setCounter(7);
    });

    expect(result.current.counter).toBe(7);
  });
});
