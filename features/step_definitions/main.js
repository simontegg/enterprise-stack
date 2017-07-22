const { defineSupportCode } = require('cucumber')
const Selector = require('testcafe').Selector
const Role = require('testcafe').Role

defineSupportCode(function ({ Given, When, Then }) {
  let t = null

  Given('I am on the main page', async function () {
    t = await this.waitForTestController()
    return t.navigateTo('http://localhost:3001')
  })

  Then('I should see the title {stringInDoubleQuotes}', async title => {
    const el = Selector('title').with({ boundTestRun: t })
    const titleText = await el.innerText
    console.log(titleText)

    return t.expect(titleText).eql(title)
  })
})
