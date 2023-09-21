const keys = Object.keys($response.body)
if (keys.length == 0 || keys[0] != '1803803057') {
    $done({})
}

console.log('修改中')

const body = $response.body
const info = body[keys[0]]
info['position'] = '北京市 容达路7号院3号楼太极信息产业园 2层'

console.log(info)

$done({
    body: {
        "data": {
            '1803803057': info,
        }
    }
})

