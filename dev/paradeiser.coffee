paradeiser_open = false

$ '.paradeiser_dropdown :not(.children)'
.on 'click', (event) ->
  console.log 'preventing link'
  event.preventDefault()
  paradeiser_link = $ this
  greybox = $ '#paradeiser-greybox'
  if greybox.is '.visible'
    paradeiser_open = false

    $ '.paradeiser_dropdown .paradeiser_children'
    .removeClass 'visible'

    greybox
    .removeClass 'visible'
  else
    paradeiser_open = true

    $ '.paradeiser_dropdown .paradeiser_children'
    .addClass 'visible'

    greybox
    .addClass 'visible'

$ '<div id="paradeiser-greybox"></div>'
.insertAfter '.paradeiser'
.on 'click', (event) ->
  if paradeiser_open == true
    paradeiser_open = false

    $ '#paradeiser-greybox'
    .removeClass 'visible'

    $ '.paradeiser_children'
    .removeClass 'visible'