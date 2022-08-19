import React from 'react';

export default function Buttons() {
 return (
  <section className="container mx-auto py-10 text-center">
   <button className="px-2 py-1 bg-blue-400 text-white hover:bg-blue-800 rounded">Prev</button>
   <span className="px-2">1 of 50</span>
   <button className="px-2 py-1 bg-blue-400 text-white hover:bg-blue-800 rounded">Next</button>
  </section>
 );
}
