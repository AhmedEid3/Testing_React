/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ThemeProviderApp from './providers/ThemeProvider';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProviderApp>{children}</ThemeProviderApp>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
