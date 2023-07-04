import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("secondary")
	return (
		<div className="text-center">
		<div onClick={()=> setColor("danger")}
		 className={"bg-" + (color==="danger"? "danger":"secondary")} style={{width: "80px"}}>Hola</div>
		<div onClick={()=> setColor("success")}
		 className={"bg-" + (color==="success"? "success":"secondary")} style={{width: "80px"}}>Hola</div>
		<div onClick={()=> setColor("warning")}
		 className={"bg-" + (color==="warning"? "warning":"secondary")} style={{width: "80px"}}>Hola</div>
		</div>
	);
};

export default Home;

