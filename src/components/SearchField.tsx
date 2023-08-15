import React from 'react';
import GitIcon from './icons/GitIcon'
import SearchIcon from './icons/SearchIcon'


const SearchForm: React.FC = () => {
  return (
    <form className="flex items-center mb-5">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <GitIcon height='20' width='20' fill='fff'/>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Search GitHub user..."
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <SearchIcon height='20' width='20'/>
        <span className="sr-only">Search button</span>
      </button>
    </form>
  )
}

export default SearchForm;