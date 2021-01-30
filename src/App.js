import {useState} from 'react';
import Question from './components/Question';
import Form from './components/Form';


function App() {

  const [budget, saveBudget] = useState(0);
  const [rem, saveRem] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);

  return (
    <div className="container">

    <header>
      <h1>Weekly Spending</h1>

      <div className="contenido-principal">

        {showQuestion ? 
          (<Question
            saveBudget={saveBudget}
            saveRem={saveRem}
            updateQuestion={updateQuestion}
          />)
          :
          (<div className="row">
            <div className="one-half column">
              <Form/>
            </div>
          
            <div className="one-half column">
              2
            </div>
          </div>)
        }

      </div>
    </header>

    </div>
  );
}

export default App;
