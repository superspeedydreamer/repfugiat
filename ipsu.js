const chartConfig = {
  width: 800,
  height: 400,
  title: 'Sample Chart',
  domainColor: 'main',
  data: {
    values: [
      { category: 'A', value: 30 },
      { category: 'B', value: 80 },
      { category: 'C', value: 45 },
      { category: 'D', value: 60 }
    ]
  },
  mark: 'bar',
  encoding: {
    x: { field: 'category', type: 'ordinal' },
    y: { field: 'value', type: 'quantitative' },
    color: { field: 'category', type: 'nominal' }
  }
};
