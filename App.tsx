
import React from 'react';
import ShuutzStudio from './components/ShuutzStudio';

import { LanguageProvider } from './components/LanguageContext';

import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <ShuutzStudio />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
