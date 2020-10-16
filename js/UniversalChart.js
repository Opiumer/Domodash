//const xlabelsUNI = [];
//const ylabelsUNI0 = [];
//const ylabelsUNI1 = [];

//String array for arguent passing
/*

const argumentsArray0 = [];
argumentsArray0[0] = ,    //csvTable: 2
argumentsArray0[1] = ,    //chartType : 0
argumentsArray0[2] = ,    //chartId : html reference
argumentsArray0[3] = ,    //yLabel1
argumentsArray0[4] = ,    //yLabel2 //optional
argumentsArray0[5] = ,    //yLabel3 //optional
argumentsArray0[6] = ,    //ycolor1
argumentsArray0[7] = ,    //ycolor2 //optional
argumentsArray0[8] = ,    //ycolor3 //optional
argumentsArray0[9] = ,    //background text

argumentsArray0[10] = ,    //xAxis min //optional
argumentsArray0[11] = ,    //xAxis max //optional
argumentsArray0[12] = ,    //step      //optional
*/

async function chartUNIVERSAL(argumentsArray0) {

  const xlabelsUNI = [];
  const ylabelsUNI1 = [];
  const ylabelsUNI2 = [];
  const ylabelsUNI3 = [];

  // DATA FETCH
  await getData(argumentsArray0[0], xlabelsUNI, ylabelsUNI1, ylabelsUNI2, ylabelsUNI3).catch(error =>{
    console.log('error!');
    console.error(error);
  });

  const ctx = document.getElementById(argumentsArray0[2]).getContext('2d');
  const config = {
    type: argumentsArray0[1],
    data: {
      labels: xlabelsUNI,
      datasets: [
      {
        label: argumentsArray0[3],
        borderColor: argumentsArray0[6],
        data: ylabelsUNI1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio : false,
      //aspectRatio: 3,
      legend: {
        display: false,
      },
      elements: {
        center: {
          text: argumentsArray0[9],
          color: "#484f57", // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20, // Defualt is 20 (as a percentage)
        }
      },
      layout: {
        padding: {
          left: 20,
          right: 5,
          top: 10,
          bottom: 0,
        },
      },
    },


      scales: {
        yAxes: [{
          ticks: {
            min: argumentsArray0[10],
            max: argumentsArray0[11],
            stepSize: argumentsArray0[12],
          }
        }],
      },
  };

  //check if there is a second dataset to plot
  if (typeof argumentsArray0[4] !== 'undefined') {
  //const ylabelsUNI2 = [];
    config.data.datasets.push({
      label: argumentsArray0[4],
      borderColor: argumentsArray0[7],
      data: ylabelsUNI2,
    },);
  };

  //check if there is a third dataset to plot
  if (typeof argumentsArray0[5] !== 'undefined') {
    //const ylabelsUNI3 = [];

    config.data.datasets.push({
      label: argumentsArray0[5],
      borderColor: argumentsArray0[8],
      data: ylabelsUNI3,
    },);
  };

  const chart = new Chart(ctx, config);

}

///////////////////////////////////////////////////////



/*
<script type="text/javascript">
  ChartSPTable('csv/SPTable.csv');
</script>
*/

//console.log(SPTableLabels,SPTableValues );

async function ChartTable(csvTable,tableId){        //'#example'

  const TableLabels = [];
  const TableValues = [];

  await getData(csvTable, TableLabels, TableValues).catch(error =>{
    console.log('error!');
    console.error(error);
  });

  $(document).ready(function() {
    $(tableId).DataTable( {
        data: { TableValues,TableLabels}
    } );
} );

  /*
  document.getElementById("DispLab0").innerHTML = labelsSPTable[0];
  document.getElementById("DispLab1").innerHTML = labelsSPTable[1];
  document.getElementById("DispLab2").innerHTML = labelsSPTable[2];
  document.getElementById("DispVal0").innerHTML = valuesSPTable[0];
  document.getElementById("DispVal1").innerHTML = valuesSPTable[1];
  document.getElementById("DispVal2").innerHTML = valuesSPTable[2];
  */

}
