/* global screenly */

document.addEventListener('DOMContentLoaded', () => {
  const booleanValueElement = document.getElementById('boolean-value')
  const booleanDisplay = document.getElementById('boolean-display')

  const booleanValue = screenly.settings.boolean_type_field

  if (booleanValue === undefined || booleanValue === null) {
    booleanValueElement.textContent = 'Not Set'
    booleanValueElement.classList.add('false')
    screenly.signalReadyForRendering()
    return
  }

  const isTrue = booleanValue === 'true' || booleanValue === true

  booleanValueElement.textContent = isTrue ? 'True' : 'False'
  booleanValueElement.classList.add(isTrue ? 'true' : 'false')

  screenly.signalReadyForRendering()
})

