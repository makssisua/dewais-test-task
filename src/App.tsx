import React from 'react';
import SearchForm from "./components/SearchField";
import GitProfile from './components/GitProfileCard';
import Loader from './components/Loader';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <SearchForm />
      {true && 
        <GitProfile />
      }
      {false && 
        <Loader />
      }
      {false && 
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          User does not exist, or something went wrong.
        </div>
      }
    </div>
  );
}

export default App;