let basic_option;

let countries = [
    "中国", "美国", "日本", "德国", "法国", "韩国", "阿根廷", "意大利", "南极", "不丹",
    "英国", "阿拉伯", "中东", "印度尼西亚", "菲律宾", "缅甸", "泰国", "印度", "越南", "其他"
]

// mock data
function generate_name() {
    let arr = []
    while (arr.length < 10){
        let random = parseInt((Math.random() * 10).toString(10))
        let country = countries[random]
        if(arr.indexOf(country) === -1){
            arr.push(country)
        }
    }
    return arr
}

function generate_value() {
    let arr = [10]
    for (let i = 0; i < 10; i++) {
        let number = Math.random() * 1000
        arr[i] = parseInt(number.toString(10));
    }
    return arr
}

function create_mock_data() {
    let array = []
    for (let i = 0; i < 10; i++) {
        let data = {
            value: generate_value()[i],
            name: generate_name()[i]
        }
        array.push(data)
    }
   return array
}

// config chart
export default basic_option = {
    title: {
        text: '专利来源',
        left: 'center',
        top: 'center'
    },
    series: [
        {
            type: 'pie',
            data: create_mock_data(),
            radius: ['40%', '70%']
        }
    ]
}