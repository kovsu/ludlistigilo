import { ISong } from "../types";
import Status from "./Status";

function Song(props: { song: ISong }) {
  const { title, artist, cover, album, status } = props.song;

  return (
    <tr>
      <td>
        <img className="w-10 h-10 rounded" src={cover} alt="cover" />
      </td>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{album}</td>
      <td>
        <Status status={status} />
      </td>
    </tr>
  );
}

export default Song;
