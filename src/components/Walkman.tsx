import "../styles/walkman.css";

type WalkmanProps = {
  track: number;
  label: string;
};

/** Decorative cassette player; selection and cable stay with the parent. */
export default function Walkman({ track, label }: WalkmanProps) {
  return (
    <div className="tape-player" aria-hidden="true">
    <div className="player-brand">HIRAL's EXPERIENCES <span>walkman</span></div>
    <div className="cassette">
    <div className="cassette-label">SIDE A · TRACK 0{track}</div>
    <div className="tape-reels"><i /><span /><i /></div>
    <div className="cassette-name">{label}</div>
    </div>
    <div className="player-speaker" />
    <div className="player-controls"><span>◀◀</span><span className="player-play">▶</span><span>■</span></div>
    <span className="player-jack" />
    </div>
  );
}
