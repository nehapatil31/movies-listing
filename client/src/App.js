import './App.css';
import EnhancedTable from './components/movies/datatable';
import Auth from './components/auth/Auth';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Switch>
          <Route path="/" exact component={EnhancedTable} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
