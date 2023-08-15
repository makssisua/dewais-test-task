import React from 'react';
import SearchForm from "./components/SearchField";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <SearchForm />
    </div>
  );
}

export default App;