function Button({ callback, currentMoney, incrementScale }) {
  return (
    <>
      <div className="center">
        <button className="button-82-pushable" onClick={() => {
          callback(currentMoney + incrementScale)
        }}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">
            Click
          </span></button>
      </div >
    </>
  );
}
export default Button
