import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, Alert, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const UserLogin = props => {
	const { store, actions } = useContext(Context);
	const [logUsername, setLogUsername] = useState("");
	const [logPassword, setLogPassword] = useState("");
	let history = useHistory();
	const handleSubmit = e => {
		actions.loginUser(logPassword, logUsername);
	};
	return (
		<Container className="space blue">
			<Row>
				<Col>
					{store.errors.loginError == true && (
						<Alert className="marginError center" variant="danger">
							The username or password is incorrect, if you don&apos;t own an account please
							<Alert.Link href="/registration"> register first.</Alert.Link>.
						</Alert>
					)}
					<Container
						id="userForm"
						style={{ width: "40rem" }}
						className={
							store.errors.loginError == false ? "marginLogin center" : "marginLoginwError center"
						}>
						<h3 className="formTitle">Login</h3>
						<Form className="search-margin">
							<Form.Row>
								<Form.Group as={Col} controlId="Username">
									<Form.Label className="input-space">Username</Form.Label>
									<Form.Control
										onChange={e => setLogUsername(e.target.value)}
										className="input-space input-shadow"
										type="text"
										placeholder="Username"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label className="input-space">Password</Form.Label>
									<Form.Control
										onChange={e => setLogPassword(e.target.value)}
										className="input-space input-shadow"
										type="password"
										placeholder="Password"
									/>
								</Form.Group>
							</Form.Row>
							<Button
								onClick={e => handleSubmit(e)}
								variant="success"
								className="input-space"
								type="button">
								Submit
							</Button>
						</Form>
					</Container>
					<div style={{ marginTop: "2rem" }} className="center">
						<a href="/registration">Don&apos;t have an account?</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
