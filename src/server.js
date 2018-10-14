import React from 'react'
import { renderToString } from 'react-dom/server'
import Mock from './components/Mock'
import Botkit from 'botkit'

const listener = Botkit.slackbot({
  debug: true,
  stats_optout: true
})
const bot = listener
  .spawn({ token: 'xoxb-448382339412-448562583826-zpQj3gKiLZQZYFcVi0GpMiLg' })
  .startRTM()

listener.on('direct_message', (bot, message) => {
  bot.startPrivateConversation(
    message,
    (err, convo) => convo.say(renderToString(<Mock message={message.text} />))
  )
})
