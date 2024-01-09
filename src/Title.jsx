const Title = ({ locked }) => {
  return locked ? (
    <div className="title">10 is the LIMIT!</div>
  ) : (
    <div className="title">Fancy Counter</div>
  );
};

export default Title;
