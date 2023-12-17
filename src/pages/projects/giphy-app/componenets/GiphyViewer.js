import React, { useState, useEffect } from "react";
import {
	Row,
	Col,
	Card,
	Button,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import axios from "axios";

const GIPHY_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "ZisKm2jvN6z9J9QW0ZJAM1OlExIdVCfc";

const GiphyViewer = () => {
	const [gifs, setGifs] = useState([]);
	const [term, setTerm] = useState("");
	const [limit, setLimit] = useState();

	useEffect(() => {
		getTrendingGifs();
	}, []);

	const getTrendingGifs = () => {
		axios
			.get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
			.then((response) => {
				console.log(response.data.data);
				setGifs(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getrandomGif = () => {
		axios
			.get(`${GIPHY_URL}/random?api_key=${API_KEY}&limit=10`)
			.then((response) => {
				console.log(response.data.data);
				setGifs([response.data.data]);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleTrendingClick = () => {
		getTrendingGifs();
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};
	const handleRandomClick = () => {
		getrandomGif();
	};
	const handleClick = () => {
		searchGif();
	};
	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			searchGif();
		}
	};
	const handleSelect = (amount) => {
		setLimit(amount);
	};
	const searchGif = () => {
		if (!term) {
			alert("Please enter a search term!");
			return;
		}
		axios
			.get(`${GIPHY_URL}/search?api_key=${API_KEY}&q=${term}&limit=10`)
			.then((response) => {
				console.log(response.data.data);
				setGifs(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const gifComponents = gifs.map((gif,i) => (
		<GIFCard key={i} title={gif.title} url={gif.images.fixed_width.url} />
	));

	return (
		<div>
			<div>
				<input
					type="text"
					value={term}
					onChange={handleChange}
					onKeyUp={handleKeyUp}
				/>
				<Button variant="primary" onClick={handleClick}>
					Search
				</Button>
				<Button variant="primary" onClick={handleTrendingClick}>
					Trending
				</Button>
				<Button variant="primary" onClick={handleRandomClick}>
					Random
				</Button>
				<DropdownButton
					onSelect={handleSelect}
					size="sm"
					id="dropdown-basic-button"
					title="limit"
					variant="secondary"
				>
					<Dropdown.Item eventKey={5}>5</Dropdown.Item>
					<Dropdown.Item eventKey={10}>10</Dropdown.Item>
					<Dropdown.Item eventKey={15}>15</Dropdown.Item>
					<Dropdown.Item eventKey={25}>25</Dropdown.Item>
				</DropdownButton>
			</div>
			<Row>{gifComponents}</Row>
		</div>
	);
};

const GIFCard = (props) => {
	return (
		<Col xs={6} sm={4} md={3} lg={2}>
			<Card>
				<Card.Img variant="top" src={props.url} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default GiphyViewer;
