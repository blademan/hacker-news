import React from 'react';

export default function SearchForm() {
 return (
  <section className="container mx-auto py-10">
   <form action="" className="border-blue-300 border-b-2 w-2/3">
    <h1 className="text-3xl py-6">Search Hacker News</h1>
    <input
     type="text"
     placeholder="React"
     className="uppercase p-3 rounded-md bg-transparent w-full"
    />
   </form>
  </section>
 );
}
