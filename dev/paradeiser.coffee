paradeiser_open = false

$ '.dropdown'
.on 'click touch', (event) ->
  event.preventDefault()
  console.log 'clicking'
  paradeiser_link = $ this
  if paradeiser_link.is '.visible'
    paradeiser_open = false

    paradeiser_link
    .find '.children'
    .removeClass 'visible'

    $ '#paradeiser-greybox'
    .removeClass 'visible'
  else
    paradeiser_open = true

    paradeiser_link
    .find '.children'
    .addClass 'visible'

    $ '#paradeiser-greybox'
    .addClass 'visible'

$ '<div id="paradeiser-greybox"></div>'
.insertAfter '.paradeiser'
.on 'click touch', (event) ->
  if paradeiser_open == true
    console.log 'closing'
    $ '#paradeiser-greybox'
    .removeClass 'visible'

    $ '.children'
    .removeClass 'visible'