const button = document.querySelector('button')
const text = document.querySelector('.text')

const recognition = createRecognition()

const createRecognition = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition =
    SpeechRecognition !== undefined ? new SpeechRecognition() : null

  if (!recognition) {
    text.innerHTML = 'Speech Recognition is not found!.'
    return null
  }

  recognition.lang = 'pt-BR'
  recognition.onStart = () => console.log('started')
  recognition.onend = () => console.log('finished')
  recognition.onerror = e => console.log('error', e)
  recognition.onresult = e => (text.innerHTML = e.result[0][0].transcript)

  return recognition
}
