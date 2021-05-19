import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { GameDetails } from "./views/gameDetails";
import { UserProfile } from "./views/userProfile";
import { UserPreferenceUpdate } from "./views/userPreferenceUpdate";
import { UserRegistration } from "./views/userRegistration";
import injectContext from "./store/appContext";
import { SearchPage } from "./views/searchPage";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserLogin } from "./views/userLogin";
import { UserGames } from "./views/userGames";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={"gf"}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path={["/home", "/"]} component={Home} />
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/details/:id" component={GameDetails} />
						<Route exact path="/search" component={SearchPage} />
						<Route exact path="/profile" component={UserProfile} />
						<Route exact path="/editpreference" component={UserPreferenceUpdate} />
						<Route exact path="/registration" component={UserRegistration} />
						<Route exact path="/login" component={UserLogin} />
						<Route exact path="/usergames" component={UserGames} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
