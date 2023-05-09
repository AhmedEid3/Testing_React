import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';
import ThemeProviderApp from './providers/ThemeProvider';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ThemeProviderApp>
      <App />
    </ThemeProviderApp>
  </StrictMode>,
);
