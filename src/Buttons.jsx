import React from 'react';
import { useGlobalContext } from './context';

export default function Buttons() {
 const { isLoading, handlePage, page, nbPages } = useGlobalContext();
 return (
  <section className="container mx-auto py-10 text-center btn-container ">
   <button
    disabled={isLoading}
    onClick={() => handlePage('dec')}
    className=" px-2 py-1 bg-blue-400 text-white hover:bg-blue-800 rounded">
    Prev
   </button>
   <span className="px-2">
    {page + 1} of {nbPages}
   </span>
   <button
    disabled={isLoading}
    onClick={() => handlePage('inc')}
    className=" px-2 py-1 bg-blue-400 text-white hover:bg-blue-800 rounded">
    Next
   </button>
  </section>
 );
}
