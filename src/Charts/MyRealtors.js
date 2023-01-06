import React, { useEffect, useState } from "react";
import spinnerr from "../assets/loadingIcon.gif";
function MyRealtors ({google, realtors}) {
  const [chart, setChart] = useState(null);
  const [dato, setDato]= useState([])
  const [time, setTime]= useState(false)

  let Screen = window.screen
  
      useEffect(()=>{
        let pes = []
          realtors?.map((e, index)=>{ 
            pes.push(
              [e.name, e.Sells.length, e.Referrals.length])
          })
          setDato(pes)
      }, [])

  useEffect(() => {
    setTimeout(()=>{
      setTime(true)
    if (google && !chart) {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Sales', "color:#6F52ED");
      data.addColumn('number', 'Referrals',"color:#FF7A00");
      data.addRows(dato);
      
      // Set chart options
      var options = {'title':'Mothly stats',
                     
                     fontSize:12,
                     titleTextStyle: {
                      
                      fontName: "Gilroy-Regular",
                      fontSize: "14", 
                      marginLeft:"-10px"
                  },

                     "colors": ["#6F52ED","#FF7A00"],
                     backgroundColor:"#EBEFF2",

                     bar: { groupWidth: "10%", borderRadius:"10px"},
                     vAxis: {format:'0'},
                     hAxis: {format:'0'}
                    };
      
      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.ColumnChart(document.getElementById('MyRealtors'));
      newChart.draw(data, options);
     
      setChart(newChart);
     
    }},1000)
    
  }, [ dato, chart, ]);
  
  return (
    <>
      
      {!google && <p>Google 404</p>}
      {
        !time?
        <img src={spinnerr}   style={{
          width: "150px",
          position: "absolute",
          right: "65vw",
          top: "40vh",
        }}/>:
      <div style={{minHeight:"350px", minWidth:"66vw"}} id="MyRealtors" className={!google ? "d-none" : Screen.width < 1000 ? "graficBigIpad" : "graficBig"} ></div>
      }
    </>
  )
}

export default MyRealtors;


