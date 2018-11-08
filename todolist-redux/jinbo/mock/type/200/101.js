const Mock = require('mockjs')
let Random = Mock.Random
let backData = Mock.mock({
    'todo_info': [
        {
            text: Random.cword(6),
            id: 0,
            isFinish: true
        },
        {
            text: Random.cword(6),
            id: 1,
            isFinish: false
        },
        {
            text: Random.cword(6),
            id: 2,
            isFinish: false
        },
    ]
})
let backDatas = {
    code: 0,
    data: backData,
    msg: 'ok'
}
module.exports = reponse
function reponse (param) {
    return backDatas
}