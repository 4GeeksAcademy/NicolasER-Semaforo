import React, {useState} from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("secondary")
	return (
		
		<div className="text-center d-grid gap-2 col-4 mx-auto justify-content">
			<button onClick={()=> setColor("danger")}
		 	className={"bg-" + (color==="danger"? "danger":"secondary")} style={{width: "100px", height:"100px", borderRadius:"100%", marginTop:"10px", marginLeft:"250px"}}></button>
			<button onClick={()=> setColor("warning")}
		 	className={"bg-" + (color==="warning"? "warning":"secondary")} style={{width: "100px", height:"100px", borderRadius:"100%", marginTop:"10px", marginLeft:"250px"}}></button>
			<button onClick={()=> setColor("success")}
		 	className={"bg-" + (color==="success"? "success":"secondary")} style={{width: "100px", height:"100px", borderRadius:"100%", marginTop:"10px", marginLeft:"250px"}}></button>
			<button onClick={()=> setColor("secondary")} type="button" class="btn btn-primary mt-2">Reset</button>
		</div>
		
	);
};

export default Home;

