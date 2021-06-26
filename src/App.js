import { Route, Switch } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import client from "./app_client/client";

import AllMeetupsPage from "./pages/AllMeetups";
// import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <ApolloProvider client={ client }>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage></AllMeetupsPage>
          </Route>

          <Route path="/new-meetup">
            <NewMeetupsPage></NewMeetupsPage>
          </Route>

          {/* <Route path="/favorites">
            <FavoritesPage></FavoritesPage>
          </Route> */}
        </Switch>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
