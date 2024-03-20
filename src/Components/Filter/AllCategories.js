import Filter from "./Filter";

function AllCategories(){
    return(
       <div>
       <h1>What kind of food do you want</h1>
{['SEAFOOD', 'ITALIAN', 'APPETIZERS', , 'SALADS', 'ALL', 'CART'].
map(category =><Filter category={category} />
)}
  
 </div>
 )
 
   }
   
   export default AllCategories;