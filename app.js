const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'Germany'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 13, region: 'India'}
]

const container = d3.select('div')
    .classed('container', true)
    .style('border', '1px solid red');

container.selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data=> (data.value * 15) + 'px');