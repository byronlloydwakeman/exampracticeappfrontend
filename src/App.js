import logo from './logo.svg';

import './App.css';

import NavBar from "./components/NavBar/navbar.jsx";
import Home from "./pages/Home/Home";

import Create from "./pages/Create/Create";
import { CreateQuestion } from './pages/Create/CreateQuestion';
import Edit from "./pages/Edit/Edit";
import EditQuestion from './pages/Edit/EditQuestion';
import Delete from "./pages/Delete/Delete";

import { Component} from 'react';
import { Route } from "react-router-dom";
import QuestionsPage from './pages/QuestionsPage';
import SubjectCardOption from './pages/Option/option';

import "./App.css";

class App extends Component {
  render() 
  {
    return (
      <div>
        <NavBar/>
        <div>
          <Route exact 
          path="/questions/:questionNumber?" 
          render={(props) => <QuestionsPage {...props}/>}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/createquestion/:subjectTitle" component={CreateQuestion}/>
          <Route exact path="/edit/:subjectTitle" component={Edit}/>
          <Route exact path="/editquestion/:subjectTitle/:questionName" component={EditQuestion}/>
          <Route exact path="/delete/:subjectTitle" component={Delete}/>
          <Route exact path="/options/:subjectTitle" component={SubjectCardOption}/>
        </div>
      </div>
    );
  }
}

// function App() {
//     fetch("http://127.0.0.1:8000/GetOne/question/do I have a small willy", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//           hostName: "mongodb://localhost:27017",
//           databaseName: "exampracticeapp",
//           collectionName : "pythonexamquestions"
//       })
//     })
//     .then(res => res.json())
//     .then(json => console.log(json))
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
