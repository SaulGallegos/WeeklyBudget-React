import Expense from './Expense';


const List = ({expenses}) => (
     <div className="gastos-realizados">

          <h2>Expenses</h2>
          {expenses.map(expense => (
               <Expense
                    key={expense.id}
                    expense={expense}
               />
          ))}
     </div>
);
 
export default List;