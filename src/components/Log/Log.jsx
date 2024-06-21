export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns?.map((turn, i) => (
        <li key={i}>
          {turn.player}: {turn.square.row + 1}, {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
