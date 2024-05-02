function Button({ callback, currentMoney }) {
  return (
    <>
      <div className="center">
        <button className="money-button" onClick={() => {
          callback(currentMoney + 1)
        }}>Click</button>
      </div >
    </>
  );
}
export default Button
