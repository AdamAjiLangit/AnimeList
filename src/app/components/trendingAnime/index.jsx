import Image from "next/image";
import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { MdPerson } from "react-icons/md";

const AnimeList = ({ title, poster, id, rating, synopsis, userCount, subtype }) => {

    return (
        <div className="flex mt-4 items-center">
            <Link href={`/${id}`} className="flex cursor-pointer ml-5">
                <Image className="rounded-md mb-4" src={poster} alt="Anime" width={1000} height={1000} />
            </Link>
            <div className="flex flex-col ml-4 pr-5">
                <Link href={`/${id}`} className="cursor-pointer">
                    <h3 className="font-bold md:text-xl text-md mb-2">{title}</h3>
                </Link>
                <div className="flex flex-row mb-2">
                    <h3 className="flex md:text-md text-md mr-3 items-center">
                        Type: {subtype}
                    </h3>
                </div>
                <div className="flex flex-row mb-2">
                    <h2 className="flex md:text-md text-md mr-3 items-center">
                        <TiStarFullOutline className="text-yellow-300" />
                        {rating}
                    </h2>
                    <h2 className="md:text-md text-md flex items-center">
                        <MdPerson className="ml-2" />
                        {userCount}
                    </h2>
                </div>
                <div className="md:text-md text-md overflow-y-scroll ml-1" style={{ maxHeight: '80px' }}>
                    <h4>
                        {synopsis}
                    </h4>
                </div>
            </div>
        </div >
    );
};

export default AnimeList;
