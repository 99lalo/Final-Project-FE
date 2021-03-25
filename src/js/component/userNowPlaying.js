import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, Container, Row, Col, Dropdown, DropdownButton, Button, ListGroup } from "react-bootstrap";
export const UserNowPlaying = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	return (
		<Card bg="light" className="profileCard profileCardBackground shadow">
			<Card.Header className="profileCardHeader">Is now playing!</Card.Header>
			<ListGroup variant="flush">
				{store.user.playing.map((value, index) => {
					if (value != null) {
						return (
							<ListGroup.Item key={index} variant="light">
								<span
									style={{ cursor: "pointer", float: "left" }}
									onClick={e => history.push({ pathname: `/details/${value.id}`, state: value.id })}>
									{value.game_name}
								</span>
								<Button
									id="ascendingbtn"
									variant="primary"
									onClick={e => actions.handlePicture(value.image)}>
									<i className="fas fa-portrait" />
								</Button>
								<span style={{ float: "right" }}>{value.notes}</span>
							</ListGroup.Item>
						);
					}
				})}
			</ListGroup>
		</Card>
	);
};
