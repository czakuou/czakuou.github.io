const calculateTip = () => {
  const billamt = document.getElementById('billamt').value
  const serviceQual = document.getElementById('serviceQual').value
  const peopleamt = document.getElementById('peopleamt').value

  if(peopleamt === 0 || billamt === 0) alert(`Please enter values`)
  if(peopleamt <= 0 || billamt <= 0) alert('Enter correct values')

  const totalTip = (billamt * serviceQual) / peopleamt

  document.getElementById('totalTip').style.display = 'block'
  document.getElementById('tip').innerHTML = totalTip.toFixed(2)
}
document.getElementById('totalTip').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('calculate').onclick = () => calculateTip()
