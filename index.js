import DashButton from 'dash-button';

const DASH_BUTTON_MAC_ADDRESS = '88:71:e5:dc:98:10';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);
let subscription = button.addListener(async () => {
  let nest = require('unofficial-nest-api');
  await nest.login(username, password);
  nest.setFanModeOn();
});

// Later, if you want to remove the listener do so with the subscription:
subscription.remove();

