import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import DisplayUsers from './components/DisplayUsers';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import DisplayMovies from './components/DisplayMovies';
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  });
  return (
    <Router>
    <ApolloProvider client={client}>
      <nav>
        <ul>
          <li><Link to="/Users">Users</Link></li>
          <li><Link to="/Movies">Movies</Link></li>
        </ul>
      </nav>
      <div className="App">
      <Routes>
        <Route path="/Users" element={<DisplayUsers />} />
        <Route path="/Movies" element={<DisplayMovies />} />
      </Routes>
      </div>
    </ApolloProvider>
    </Router>
  );
}

export default App;
