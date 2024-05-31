import * as Mock from 'intermock'

console.log('Mock', Mock.mock)
function mockscript() {
  Mock.mock({
    files: [string, string],
  })
}

export default mockscript
