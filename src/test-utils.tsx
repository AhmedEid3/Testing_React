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

export * from '@testing-library/react';
export { customRender as render };
