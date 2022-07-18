import formatName from "../util/formatName";

export default function Greeting(props) {
  return (
    <div>
      <h1>Hello, {formatName(props.name[0], props.name[1])}.</h1>
    </div>
  );
}
