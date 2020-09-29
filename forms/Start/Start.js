btnGo.onclick=function(){
  
  let changeValue = slctCarHome.value

  if (changeValue == 'selectCar') {
    ChangeForm(carLoan);
  } else {
    console.log(changeValue) // ChangeForm(homeLoan)
  }
}