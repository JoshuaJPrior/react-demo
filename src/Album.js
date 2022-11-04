import { OldNewLabel } from "./OldNewLabel";

export const Album = (props) => {
  return (
    <div className="album">
      <div className="album-heading">{props.name}</div>
      <div className="artist-name">{props.artist}</div>
      <div className="released">released in {props.released}</div>
      <OldNewLabel released={props.released} />
      <img
        className="album-cover"
        src={props.cover}
        alt={`album of ${props.name}`}
      />
    </div>
  );
};
