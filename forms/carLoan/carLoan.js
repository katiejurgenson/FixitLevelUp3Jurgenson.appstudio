
btnEnter.onclick=function(){
  let carPrinciple = inptPrinciple.value
    let carPrincipleAmt = Number(carPrinciple.replace(",", ""));
  let carInterest = Number(inptMnInterest.value)
    let carMnthInterest = carInterest/12/100
  let carMnthTotal = Number(inptMonths.value)

    function carLoanPayment (principle, interest, months) {
    return (principle * (interest * ((1 + interest)**months)) / (((1 + interest)**months)-1))
  }

  let carMnthPymt = carLoanPayment(carPrincipleAmt, carMnthInterest, carMnthTotal);

  let carMnthPymtRnd = carMnthPymt.toPrecision(5);

  lblPaymentMessage.value = `A car loan for $${carPrinciple} over ${carMnthTotal} months at ${carInterest}% interest would have a monthly payment of $${carMnthPymtRnd}.`
}
btnNewCar.onclick=function(){
  inptPrinciple.value = ""
  inptMnInterest.value = ""
  inptMonths.value = ""
  lblPaymentMessage.value = ""
}

btnBack.onclick=function(){
  ChangeForm(Start);
}
