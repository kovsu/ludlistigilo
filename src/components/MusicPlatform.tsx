import type { IPlatform } from "../types";
import Playlist from "./PlaylistInfo";

function Platform(props: { platform: IPlatform }) {
  const { platform } = props;

  const img = new URL(`../logos/${platform.icon}`, import.meta.url).href

  return (
    <div 
      className="w-54 cursor-pointer transition duration-300 hover:shadow-lg"
      border="rounded-lg solid black border-2" 
      p="4"
      flex="~ col items-center gap-2"
    > 
      <div flex="~ justify-center items-center gap-4" className="w-full">
        <img className="w-12 h-12" src={img} alt={platform.name} />
        <p>{platform.name}</p>
      </div>
      <div 
          className={platform.authorization ? "text-success" : "text-failed"} 
          flex="~ items-center gap-2"
          text="3"
        >
          <div className={platform.authorization ? "i-carbon-face-satisfied-filled" : "i-carbon-face-dissatisfied-filled"} />
          <p>{platform.authorization ? "Authenticated already." : "Not authenticated yet."}</p>
        </div>
    </div>
  );
}

function Platforms() {
  const platforms: IPlatform[] = [
    {
      name: "Spotify",
      icon: "spotify.svg",
      authorization: true,
    },
    {
      name: "Apple Music",
      icon: "apple.svg",
      authorization: false,
    },
    {
      name: "NetEase Music",
      icon: "wy.svg",
      authorization: false,
    },
    {
      name: "QQ Music",
      icon: "qq.svg",
      authorization: true,
    }
  ];

  // useEffect(() => {
  //   async function getPlatforms() {
  //     const res = await fetch("http://163cn.tv/mE8EI0");
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   getPlatforms();
  // })

  return (
    <>
      <div flex="~ gap-4 justify-center wrap">
        {
          platforms.map((platform, index) => {
            return <Platform key={index} platform={platform} />
          })
        }
      </div>
      <div className="w-78 h-3px bg-gray-200 rounded-lg" m="x-auto y-12" />
      <Playlist />
    </>
  )
 
}

export default Platforms;
