function Store({ upgradeCost, incrementScale, currentMoney, callback, callback2, callback3 }) {

  const handleClick = () => {
    if (currentMoney >= upgradeCost) {
      console.log("Deneme")
      callback(currentMoney - upgradeCost);
      callback2(incrementScale + 1)
      callback3(upgradeCost * 2)
    }
    else {
      console.alert("Not Enough money")
    }

  }
  return (
    <div>
      <div className="card">
        <h1 className="title">+1 To Click</h1>
        <h1 className="sub-title">Cost:{upgradeCost}$</h1>
        <button className="button" onClick={handleClick}>Upgrade</button>
      </div>
    </div>
  );
}

export default Store
