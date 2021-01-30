import {useState} from 'react';


const Form = () => {
     return (
          <form>
               <h2>Add your expenses here</h2>

          <div className="campo">
               <label>Expense:</label>
               <input
                    type="text"
                    className="u-full-width"
                    placeholder="e.g. Transport"
               />
          </div>

          <div className="campo">
               <label>Amount:</label>
               <input
                    type="number"
                    className="u-full-width"
                    placeholder="e.g. 500"
               />
          </div>

          <input
               type="submit"
               className="button-primary u-full-width"
               value="Add Expense"
          />
          </form>
     );
}
 
export default Form;

