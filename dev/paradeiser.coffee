paradeiser_open = false

$ '.dropdown'
.on 'click touch', (event) ->
  event.preventDefault()
#  console.log 'clicking'
  paradeiser_link = $ this
  greybox = $ '#paradeiser-greybox'
  if greybox.is '.visible'
    paradeiser_open = false

    paradeiser_link
    .find '.children'
    .removeClass 'visible'

    greybox
    .removeClass 'visible'
  else
    paradeiser_open = true

    paradeiser_link
    .find '.children'
    .addClass 'visible'

    greybox
    .addClass 'visible'

#  console.log paradeiser_open

$ '<div id="paradeiser-greybox"></div>'
.insertAfter '.paradeiser'
.on 'click touch', (event) ->
  if paradeiser_open == true
#    console.log 'closing'
    $ '#paradeiser-greybox'
    .removeClass 'visible'

    $ '.children'
    .removeClass 'visible'