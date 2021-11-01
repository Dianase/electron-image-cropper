import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import About from './components/About';
import ImageCropScreen from './components/ImageCropScreen';
import { useState } from 'react';

export default function App() {
  const [myFile, setMyFile] = useState();
  return (
    <Router>
      <Switch>
        <Route path="/crop">
          <ImageCropScreen myFile={myFile} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/">
          <Hello setMyFile={setMyFile} />
        </Route>
      </Switch>
    </Router>
  );
}
