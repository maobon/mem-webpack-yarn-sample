import * as echarts from 'echarts';
import option from "./basic";

// 基于准备好的dom，初始化echarts实例
export default function createBarChart() {
    const myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option)
}

