import { useState } from "react";
import { ISong } from "../types";
import Song from "./Song";

function Playlist() {
  const [platform, setPlatform] = useState("spotify");

  const img = new URL(`../logos/${platform}.svg`, import.meta.url).href

  const playlist: ISong[] = [
    {
      title: "21",
      artist: "Gracie Abrams",
      album: "21 - Single",
      cover: "https://th.bing.com/th?id=OSK.7d6f4f4a8d69109a8241af502217515c&w=148&h=148&c=7&o=6&dpr=2&pid=SANGAM",
      status: "pending",
    },
    {
      title: "21",
      artist: "Gracie Abrams Gracie Abrams Gracie Abrams",
      album: "21 - Single",
      cover: "https://th.bing.com/th?id=OSK.7d6f4f4a8d69109a8241af502217515c&w=148&h=148&c=7&o=6&dpr=2&pid=SANGAM",
      status: "converted",
    },
    {
      title: "21",
      artist: "Gracie Abrams Gracie Abrams Gracie Abrams",
      album: "21 - Single",
      cover: "https://th.bing.com/th?id=OSK.7d6f4f4a8d69109a8241af502217515c&w=148&h=148&c=7&o=6&dpr=2&pid=SANGAM",
      status: "converting",
    },
    {
      title: "21",
      artist: "Gracie Abrams Gracie Abrams Gracie Abrams",
      album: "21 - Single",
      cover: "https://th.bing.com/th?id=OSK.7d6f4f4a8d69109a8241af502217515c&w=148&h=148&c=7&o=6&dpr=2&pid=SANGAM",
      status: "uploading",
    },
    {
      title: "21",
      artist: "Gracie Abrams Gracie Abrams Gracie Abrams",
      album: "21 - Single",
      cover: "https://th.bing.com/th?id=OSK.7d6f4f4a8d69109a8241af502217515c&w=148&h=148&c=7&o=6&dpr=2&pid=SANGAM",
      status: "uploaded",
    },
    {
      title: "21",
      artist: "Gracie Abrams Gracie Abrams Gracie Abrams",
      album: "21 - Single",
      cover: "https://th.bing.com/th?id=OSK.7d6f4f4a8d69109a8241af502217515c&w=148&h=148&c=7&o=6&dpr=2&pid=SANGAM",
      status: "failed",
    }
  ]

  return (
    <div>
      <div flex="~ items-center justify-between">
        <h2 className="mb-4">Playlist</h2>
        <div className="text-gray-4 mb-4" flex="~ items-center gap-2">
          From
          <img className="w-6 h-6" src={img} alt={platform} />
          to
        </div>
      </div>
      <table className="w-full">
        <thead className="text-center">
         <tr>
          <th className="bg-gray-3" p="y-2">Cover</th>
          <th className="bg-gray-3">Name</th>
          <th className="bg-gray-3">Artist</th>
          <th className="bg-gray-3">Album</th>
          <th className="bg-gray-3">Status</th>
         </tr>
        </thead>
        <tbody className="w-full">
          {
            playlist.map((song, i) => <Song key={i} song={song}/>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Playlist;
