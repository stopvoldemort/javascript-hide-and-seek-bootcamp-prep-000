function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  const x = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = x.length; i<l; i++) {
    let y = parseInt(x[i].innerHTML, 10)
    x[i].innerHTML = y + n
  }
}

function deepestChild() {
  let current = document.querySelector('#grand-node')
  let next = []
  while (current) {
    if (current.children.length) {
      for (let i = 0, l = current.children.length; i < l; i++) {
        next.push(current.children[i])
      }
    }
    else {
      return current
    }
    current = next.shift()
  }
}
