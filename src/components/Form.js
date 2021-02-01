import {useState} from 'react';
import Error from './Error';
import { nanoid } from 'nanoid';


const Form = ({saveExpense, saveCreateEx}) => {

     const [name, saveName] = useState('');
     const [amount, saveAmount] = useState(0);
     const [error, saveError] = useState(false);

     const addExpense = e => {
          e.preventDefault();

          if(amount < 1 || isNaN(amount) || name.trim() === ''){
               saveError(true);
               return;
          }
          saveError(false);

          const expense ={
               name,
               amount,
               id: nanoid()
          }

          saveExpense(expense);
          saveCreateEx(true);
          saveName('');
          saveAmount(0);
     }

     return (
          <form
               onSubmit={addExpense}
          >
               <h2>Add your expenses here</h2>

          <div className="campo">
               <label>Expense:</label>
               <input
                    type="text"
                    className="u-full-width"
                    placeholder="e.g. Transport"
                    value={name}
                    onChange={e => saveName(e.target.value)}
               />
          </div>

          <div className="campo">
               <label>Amount:</label>
               <input
                    type="number"
                    className="u-full-width"
                    placeholder="e.g. 500"
                    value={amount}
                    onChange={e => saveAmount(parseInt(e.target.value), 10)}
               />
          </div>

          {error ? <Error msj="Both fields are required"/> : null}

          <input
               type="submit"
               className="button-primary u-full-width"
               value="Add Expense"
          />
          </form>
     );
}
 
export default Form;

