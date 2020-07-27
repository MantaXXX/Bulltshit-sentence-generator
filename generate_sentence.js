function generateSentence(option) {
  let target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // return sentence
  if (option) {
    const taskRandomIndex = Math.floor(Math.random() * task[option].length)
    const phraseRandomIndex = Math.floor(Math.random() * phrase.length)
    return `身為一位 ${target[option]}，${task[option][taskRandomIndex]}，${phrase[phraseRandomIndex]}吧!`
  } else {
    return '請先選擇一份職業！'
  }
}

module.exports = generateSentence