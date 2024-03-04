import AnimeList from "@/app/components/trendingAnime";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/trending/anime?limit=8`)
  const trendingAnime = await response.json()

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime`);
  const anime = await response2.json();

  return (
    <div>
      <div className="p-4 pt-36">
        <h1 className="font-bold text-2xl">Popular Anime</h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {trendingAnime.data.map(data => {
          return (
            <div key={data.id} className="shadow-xl rounded-md">
              <AnimeList poster={data.attributes.posterImage.original} title={data.attributes.canonicalTitle} id={data.id} rating={data.attributes.averageRating} synopsis={data.attributes.synopsis} userCount={data.attributes.userCount} subtype={data.attributes.subtype} />
            </div>
          )
        }
        )}
      </div>
      <div className="p-4 mt-10">
        <h1 className="font-bold text-2xl">Other Anime</h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map(data => {
          return (
            <div key={data.id} className="shadow-xl rounded-md">
              <AnimeList poster={data.attributes.posterImage.original} title={data.attributes.canonicalTitle} id={data.id} rating={data.attributes.averageRating} synopsis={data.attributes.synopsis} userCount={data.attributes.userCount} subtype={data.attributes.subtype} />
            </div>
          )
        }
        )}
      </div>
    </div>
  );
}

export default Home;
