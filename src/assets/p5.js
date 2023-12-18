import React, { useEffect, useRef } from "react";
import * as math from "mathjs";
const CanvasComponent = () => {
	const canvasRef = useRef(null);
	const canvasSize = 200;
	const fontSize = 20;
	let columns, rows;

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		columns = math.floor(canvas.width / fontSize);
		rows = math.floor(canvas.height / fontSize);

		const displayRandomAlphanumericGrid = () => {
			const chars =
				"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

			for (let i = 0; i < columns; i++) {
				for (let j = 0; j < rows; j++) {
					const x = i * fontSize + fontSize / 2;
					const y = j * fontSize + fontSize / 2;
					context.fillStyle = "#7CFC00";
					const randomChar = chars[math.floor(math.random() * chars.length)]; 
					context.fillText(randomChar, x, y);
				}
			}
		};

		const draw = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = "#222222";
			context.fillRect(0, 0, canvas.width, canvas.height);
			displayRandomAlphanumericGrid();
		};

		const setup = () => {
			canvas.width = canvasSize;
			canvas.height = canvasSize;
			context.font = `${fontSize}px Arial`;
			context.textAlign = "center";
			context.textBaseline = "middle";
			context.fillStyle = "#222222";
			context.fillRect(0, 0, canvas.width, canvas.height);
			draw();
		};

		setup();
        draw();
		const intervalId = setInterval(draw, 1000 / 8);

		return () => clearInterval(intervalId);
	}, []);

	return <canvas ref={canvasRef} />;
};

export default CanvasComponent;
