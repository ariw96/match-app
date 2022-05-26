import React,{useContext} from "react";
import { Stack, Card } from "react-bootstrap";
import good from "./assets/good.png";
import bad from "./assets/bad.png";
import { PicContext } from "./PicContext";

function Emogy(props) {
	const [data, setData] = useContext(PicContext);
	return (
        <div className="emogy">
		<Stack gap={2}>
            <h1>{`${data.countBad}`}</h1>
			<figure style={{ backgroundImage: `url(${bad})` }}></figure>
		</Stack>
		<Stack  gap={2}>
            <h1>{`${data.countGood}`}</h1>
			<figure style={{ backgroundImage: `url(${good})` }}></figure>
		</Stack>
        </div>
		
	);
}

export default Emogy;
