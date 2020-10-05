
btnSubmitH.onclick=function(){
  let homePrinciple = inptPrincipleH.value
    let homePrincipleAmt = Number(homePrinciple.replace(",", ""));
  let homeInterest = Number(inptMnInterestH.value)
    let homeMnthInterest = homeInterest/12/100
  let homeTermMnth = Number(slctHomeTerm.value)*12
  
    function homeLoanPayment (principle, interest, months) {
    return (principle * (interest * ((1 + interest)**months)) / (((1 + interest)**months)-1))
  }

  let homeMnthPymt = homeLoanPayment(homePrincipleAmt, homeMnthInterest, homeTermMnth);
  
  let homeMnthPymtRnd = homeMnthPymt.toPrecision(6);
  
  lblPaymentMessageH.value = `A home loan for $${homePrinciple} over ${slctHomeTerm.value} years at ${homeInterest}% interest would have a monthly payment of $${homeMnthPymtRnd}.`
}
btnNewHome.onclick=function(){
  inptPrincipleH.value = ""
  inptMnInterestH.value = ""
  slctHomeTerm.value = ""
  lblPaymentMessageH.value = ""
}

btnBackH.onclick=function(){
  ChangeForm(Start);
}
