const HelloPage = (props) => {
  return <div>Display {props.match.params.name}</div>;
};

export default HelloPage;
