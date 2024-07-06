let multi_series;
export default multi_series = {
    xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25]
        },
        {
            type: 'bar',
            data: [26, 24, 18, 22, 23, 20, 27]
        }
    ]
};