const liveSite = () => {
  displayButtons(scrollTop + reload + scrollBottom + closeTab)

  const top = getElement(true, 'scrollTop')
  const down = getElement(true, 'scrollBottom')
  const action = getElement(true, 'actionBtn')
  const help = getElement(
    false,
    'bg-orange-600 px-20 py-2 text-white rounded fixed top-2 left-[45%]'
  )[0]
  help.click()

  top.addEventListener('click', function () {
    window.scrollTo(0, 0)
  })

  down.addEventListener('click', function () {
    window.scrollTo(0, 9999999999)
  })
  action.addEventListener('click', function () {
    const restart = getElement(
      false,
      'bg-green-600 text-white w-full py-2 rounded mt-16'
    )[0]

    if (restart) {
      restart.click()
      help.click()
    } else {
      help.click()
    }
  })
}
