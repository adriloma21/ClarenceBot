const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    let serverIn = await client.guilds.cache.size
    console.log(client.user.tag + ' has logged in.');               
    client.user.setPresence({
      status: 'online',
      activity: {
          name: 'En Twitch',
          type: 'STREAMING',
          url: 'https://www.twitch.tv/Voltriixz_'
      }
  })
  }
}
