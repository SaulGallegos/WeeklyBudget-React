import {useState, useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control';


function App() {

  const [budget, saveBudget] = useState(0);
  const [rem, saveRem] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createEx, saveCreateEx] = useState(false);

  useEffect(() => {
    if(createEx){
      saveExpenses([
        ...expenses,
        expense
      ]);

      const remBudget = rem - expense.amount;
      saveRem(remBudget);

      saveCreateEx(false);
    }
  }, [expense, createEx, expenses, rem])


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
              <Form
                saveExpense={saveExpense}
                saveCreateEx={saveCreateEx}
              />
            </div>
          
            <div className="one-half column">
              <List
                expenses={expenses}
              />

              <Control
                budget={budget}
                rem={rem}
              />
            </div>
          </div>)
        }

      </div>
    </header>

    </div>
  );
}

export default App;
