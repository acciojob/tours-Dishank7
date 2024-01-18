import React , {useState} from "react";
import data from "../Data/Data";

// const App = () => {

//    const[tour , settour] = useState(data)
//    const[tourInfo , settourInfo] = useState(false)
//    const[Id , setId] = useState("")
   


//    function info (id) {
//       if(tourInfo == false){
//         settourInfo(true)
//         setId(id)
   
//       }
//       else settourInfo(false)
//    }

//      function deleteTour(index){
     
//       const newTour = [...tour]
//       newTour.splice(index , 1)
//       settour(newTour)
//      }


//     return(
//       <main id="main">
//           <h1 className="title">Tour</h1>
//           {
//             tour.length == 0  && <button className="btn" onClick={()=>settour(data)}>Refresh</button>
//           }
//           {
//             tour.map((item , index)=>{
              
//               return(
//                 <div className="single-tour">
//                   <h3>{item.name}</h3>
//                   <img src={item.image}/>
//                   <span className="tour-price">$ {item.price}</span>
//                   <button onClick={()=>info(item.id)} > ShowMore/ShowLess</button>
//                   {
//                     ( tourInfo == true && item.id==Id) && (<div className="tour-info">{item.info}</div>)
//                   }
//                   <button onClick={()=>deleteTour(index)}>Delete tour</button>

//                 </div>
//               )
//             })
//           }
//       </main>
//     )
// }
// export default App;



const App = () => {
  const [tour, setTour] = useState(data);
  const [tourInfo, setTourInfo] = useState(Array(data.length).fill(false));
  const [id, setId] = useState("");

  function toggleInfo(index) {
    setTourInfo((prev) => {
      const newTourInfo = [...prev];
      newTourInfo[index] = !newTourInfo[index];
      return newTourInfo;
    });
    setId(index);
  }

  function deleteTour(index) {
    const newTour = [...tour];
    newTour.splice(index, 1);
    setTour(newTour);
  }

  return (
    <main id="main">
      <h1 className="title">Tour</h1>
      {tour.length === 0 && (
        <button className="btn" onClick={() => setTour(data)}>
          Refresh
        </button>
      )}
      {tour.map((item, index) => {
        return (
          <div className="single-tour" key={index}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <span className="tour-price">$ {item.price}</span>
            <button onClick={() => toggleInfo(index)}>
              {tourInfo[index] ? "Show Less" : "Show More"}
            </button>
            {tourInfo[index] && id === index && (
              <div className="tour-info">{item.info}</div>
            )}
            <button onClick={() => deleteTour(index)}>Delete tour</button>
          </div>
        );
      })}
    </main>
  );
};

export default App;
