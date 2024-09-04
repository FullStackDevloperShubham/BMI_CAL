const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight ').value)
  const results = document.querySelector('#results ')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = "Plese give a valid height"
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Plese give a valid weight"
  }

  else {
    const newHeight = height / 100
    const BMI = (weight / (newHeight * newHeight)).toFixed(2)
    results.innerHTML = BMI
  }
})
