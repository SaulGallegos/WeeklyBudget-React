export const checkBudget = (budget, rem) => {
     let classCSS;

     if( (budget/4) > rem){
          classCSS = 'alert alert-danger';
     } else if ( (budget/2) > rem){
          classCSS = 'alert alert-warning';
     } else{
          classCSS = 'alert alert-success';
     }

     return classCSS;
}