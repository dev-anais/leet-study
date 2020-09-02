let converted = ''
for (let i = 0; i < text.length; i++) {
  if (text[i] == ' ') {
    converted += '-'
  } else if (text[i] == text[i].toUpperCase()) {
    converted += text[i].toLowerCase()
  } else {
    converted += text[i]
  }
}
