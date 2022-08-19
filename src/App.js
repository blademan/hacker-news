import React from 'react';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
function App() {
 return (
  <main className="bg-zinc-100 p-10">
   <SearchForm />
   <Buttons />
   <Stories />
  </main>
 );
}

export default App;
