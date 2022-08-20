import { useGlobalContext } from './context';

export default function SearchForm() {
 const { handleSearch } = useGlobalContext();

 return (
  <section className="container mx-auto py-10">
   <form
    onSubmit={(e) => e.preventDefault()}
    action=""
    className="border-blue-300 border-b-2 w-2/3">
    <h1 className="text-3xl py-6">Search Hacker News</h1>
    <input
     onChange={(e) => handleSearch(e.target.value)}
     type="text"
     placeholder="React"
     className=" p-3 rounded-md bg-transparent w-full"
    />
   </form>
  </section>
 );
}
