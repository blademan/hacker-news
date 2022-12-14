import { useGlobalContext } from './context';

export default function Stories() {
 const { hits, removeHits, isLoading } = useGlobalContext();

 if (isLoading) {
  return <div className="loading"></div>;
 }
 return (
  <section className="container mx-auto py-10 grid grid-cols-2 gap-5">
   {hits.map(({ title, num_comments: comments, points, author, url, objectID: id }) => (
    <article key={id} className="space-y-2 bg-white p-6 rounded-sm  shadow">
     <h3 className="text-lg font-bold"> {title}</h3>
     <span>
      {points} point by {author} | {comments} comments
     </span>
     <div className="flex space-x-6">
      <a target="_blank" rel="noopener noreferrer" href={url} className="text-blue-400">
       Read More
      </a>
      <button onClick={() => removeHits(id)} className="text-red-500">
       Remove
      </button>
     </div>
    </article>
   ))}
  </section>
 );
}
