import React, {useState} from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("secondary")
	return (
		
		<div className="text-center d-grid col-3 mx-auto justify-content">
			<div className="text-center d-grid col-3 mx-auto justify-content" style={{backgroundColor: "#181818", width:"50px", height:"70px"}}></div>
			<div className="text-center d-grid mx-auto justify-content" style={{backgroundColor: "#181818", width:"200px", borderRadius:"20px", marginTop:"0px"}}> 
				<div onClick={()=> setColor("danger")}
				className={"bg-" + (color==="danger"? "danger":"secondary")} style={{width: "100px", height:"100px", borderRadius:"100%", marginTop:"10px", marginLeft:"50px"}}></div>
				<div onClick={()=> setColor("warning")}
				className={"bg-" + (color==="warning"? "warning":"secondary")} style={{width: "100px", height:"100px", borderRadius:"100%", marginTop:"10px", marginLeft:"50px"}}></div>
				<div onClick={()=> setColor("success")}
				className={"bg-" + (color==="success"? "success":"secondary")} style={{width: "100px", height:"100px", borderRadius:"100%", marginTop:"10px", marginLeft:"50px", marginBottom:"10px"}}></div>
			</div>
			<button onClick={()=> setColor("secondary")} type="button" class="btn btn-primary mt-2">Reset</button>
		</div>
		
	);
};

export default Home;

