import { games } from './data'

export function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length)
  const notifTitle = games[randomItem].name
  const notifBody = `Created by ${games[randomItem].author}.`
  const notifImg = `img/${'placeholder'}.jpg`
  const options = {
    body: notifBody,
    icon: notifImg,
  }
  new Notification(notifTitle, options)
  setTimeout(randomNotification, 3 * 1000)
}
