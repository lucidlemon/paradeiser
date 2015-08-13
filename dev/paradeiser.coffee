paradeiser_open = false

$ '.paradeiser_dropdown :not(.children)'
.on 'click', (event) ->
  console.log 'preventing link'
  event.preventDefault()
  greybox = $ '#paradeiser-greybox'

  if greybox.is '.visible'
    $ '.paradeiser_dropdown .paradeiser_children'
    .removeClass 'visible'

    greybox
    .removeClass 'visible'
  else
    $ '.paradeiser_dropdown .paradeiser_children'
    .addClass 'visible'

    greybox
    .addClass 'visible'

$ '<div id="paradeiser-greybox"></div>'
.insertAfter '.paradeiser'
.on 'click', (event) ->
    $ '#paradeiser-greybox'
    .removeClass 'visible'

    $ '.paradeiser_children'
    .removeClass 'visible'