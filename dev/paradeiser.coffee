paradeiser_open = false

$ '.paradeiser_dropdown :not(.paradeiser_children)'
.on 'click', (event) ->
  console.log 'preventing link'
  event.preventDefault()
  $ '.paradeiser_dropdown .paradeiser_children, #paradeiser-greybox'
  .toggleClass 'visible'

$ '<div id="paradeiser-greybox"></div>'
.insertAfter '.paradeiser'
.on 'click', (event) ->
  $ '.paradeiser_dropdown .paradeiser_children, #paradeiser-greybox'
  .removeClass 'visible'