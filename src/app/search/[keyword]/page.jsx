import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/app/components/trendingAnime";
import Header from "@/app/components/trendingAnime/header";

const Page = async ({ params }) => {
    const { keyword } = params

    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    return (
        <>
            <section>
                <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page;