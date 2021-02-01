import {checkBudget} from '../helpers';


const Control = ({budget, rem}) => {
     return (
     <>
          <div className="alert alert-primary">
               Budget: ${budget}
          </div>
          <div className={checkBudget(budget, rem)}>
               Remaining: ${rem}
          </div>
     </>
     );
}
 
export default Control;