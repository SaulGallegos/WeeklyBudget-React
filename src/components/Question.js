import {useState} from 'react';
import Error from './Error'


const Question = ({saveBudget, saveRem, updateQuestion}) => {

     const [amount, saveAmount] = useState(0);
     const [error, changeError] = useState(false);

     const addBudget = e => {
          e.preventDefault();

          if(amount <= 0 || isNaN(amount)){
               changeError(true);
               return;
          }

          changeError(false);

          saveBudget(amount); 
          saveRem(amount);

          updateQuestion(false);
     }

     return ( 
     <>
          <h2>Enter your budget</h2>

          {error ? 
               <Error
                    msj="Invalid Amount"
               /> 
          : 
               null
          }

          <form
               onSubmit={addBudget}
          >
               <input
                    type="number"
                    className="u-full-width"
                    placeholder="Enter your budget"
                    onChange={e => saveAmount(parseInt(e.target.value))}
               ></input>

               <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget"
               ></input>
          </form>
     </>
     );
}
 
export default Question;