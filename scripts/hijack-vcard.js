const resp = $response.body
const rescode = resp['rescode']
if (rescode != 0) {
    console.log('error rescode: ', rescode)
    $done({})
    return
}

const data = resp['data']
 
const keys = Object.keys(data)
if (keys.length == 0 || keys[0] != '1803803057') {
    $done({})
    return
}

console.log('修改中')

const info = data[keys[0]]
info['position'] = '北京市 容达路7号院3号楼太极信息产业园 2层'

console.log(info)

$done({
    body: {
        "data": {
            '1803803057': info,
        },
        "rescode": 0,
    }
})

