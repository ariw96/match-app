import React, { useState, useContext } from "react";
import { Card, Stack, Button } from "react-bootstrap";
import { PicContext } from "./PicContext";
import "./Home.css";
import Emogy from "./Emogy";
import v from "./assets/v.png";
import x from "./assets/x.png";

export default function Home(props) {
	const [data, setData] = useContext(PicContext);
	const pic ="https://picsum.photos/200/200?random="
	const addX = () => {
		setData({ ...data, countBad: data.countBad + 1,picNum: data.picNum + 1 });
	};
	const addV = () => {
		setData({ ...data, countGood: data.countGood + 1,picNum: data.picNum + 1 });
	};

	return (
		<>
		
			<div className="container" style={{ height: "100vh" }}>
			<Emogy />
				<Card style={{ width: "18rem" }} className="mx-auto my-5">
					<Card.Img variant="top" src={`${pic}${data.picNum}`} />
					<Card.Body>
						<Stack direction="horizontal" gap={2}>
							<Button variant="primary" onClick={addX}> <Card.Img src={`${x}`}/></Button>
							<Button variant="warning" onClick={addV}>  <Card.Img src={`${v}`}/></Button>
						
						</Stack>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}
