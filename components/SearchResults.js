import Post from "./Post";

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>;
  return (
    <div className="absolute top-20 right-0 z-10 border-4 border-gray-500 bg-white text-black w-full rounded-2xl md:w-6/12 md:right-10">
      <div className="p-10">
        <h2 className="text-3xl mb-3">{results.length} Results</h2>

        {results &&
          results.map((result, index) => <Post key={index} post={result} compact={true} />)}
      </div>
    </div>
  );
}
