//call: <script src="./js/getData.js"></script>

// send string argument like 'ZonAnn.Ts+dSST.csv'
async function getData(csvTable, xLabel, yLabel1, yLabel2, yLabel3) {

  const response = await fetch(csvTable);
  //console.log(response);
  const data = await response.text();
  //console.log(data);

  const table = data.split('\n').slice(1);
  table.forEach(row => {
    const columns = row.split(',');
    const xAxis = columns[0];
    xLabel.push(xAxis);
    const yAxis1 = columns[1];
    yLabel1.push(yAxis1);

    //console.log(xAxis,yAxis);
    //console.log(xLabel,yLabel1);

    //multi graph
    if (typeof yLabel2 !== 'undefined') {

      const yAxis2 = columns[2];
      yLabel2.push(yAxis2);
      //console.log(yLabel2);
    };

    if (typeof yLabel3 !== 'undefined') {

      const yAxis3 = columns[3];
      yLabel3.push(yAxis3);
      //console.log(yLabel3);
    };
  })
}
