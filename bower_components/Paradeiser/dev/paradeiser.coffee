paradeiser_open = false

$ '.paradeiser_dropdown :not(.paradeiser_children)'
.on 'click', (event) ->
  paradeiser_dropdown = $ this
  if paradeiser_dropdown .parents('.paradeiser_children') .length
#    console.log 'child'
  else
#    console.log 'parent'
    event.preventDefault()

  $ '.paradeiser_dropdown .paradeiser_children, #paradeiser-greybox'
  .toggleClass 'visible'

$ '<div id="paradeiser-greybox"></div>'
.insertAfter '.paradeiser'
.on 'click', (event) ->
  $ '.paradeiser_dropdown .paradeiser_children, #paradeiser-greybox'
  .removeClass 'visible'