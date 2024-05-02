function MoneyText(props) {
  return (
    <div className="money-text-div">
      <p className="money-text-p">{props.currentMoney}$</p>
    </div>
  );
}
export default MoneyText;
