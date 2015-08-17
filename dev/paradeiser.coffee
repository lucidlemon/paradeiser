paradeiser_open = false

$ '.paradeiser_dropdown'
.on 'click', (event) ->
  target = $ event.target
  if !target .parents('.paradeiser_children') .length
#    console.log 'parent'
    event.preventDefault()
#  else
#    console.log 'child'


  $ '.paradeiser_dropdown .paradeiser_children, #paradeiser-greybox'
  .toggleClass 'visible'

$ '<div id="paradeiser-greybox"></div>'
.insertAfter '.paradeiser'
.on 'click', (event) ->
  $ '.paradeiser_dropdown .paradeiser_children, #paradeiser-greybox'
  .removeClass 'visible'