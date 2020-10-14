const inventory = [];
const inventoryList = () => {


const addItem = (item) => {
      
       const repeat = inventory.filter((element) => element.name === item.name)
       if (repeat == '') {
           inventory.push(item)
          
           return {status:true,message:`item '${item.name}'' added to inventory`};
       } else {
           return {status:false,message:`item '${item.name}' already exists in the inventory`};
       }
   }

const removeItem = (item) => {
   const itemIndex = inventory.findIndex((element) => element.name === item.name);
   if(itemIndex > -1){

       inventory.splice(itemIndex,1)
       return {status:true,message:`item '${item.name}'' removed from inventory`};
   }
   else{
       return {status:false,message:`item '${item.name}' unable to remove`};               

   }
   }

const updateCount = (item) =>{
   {
const itemIndex = inventory.findIndex((element) => element.name === item.name);
if(itemIndex > -1){
    inventory[itemIndex].count = parseInt(item.count);
   return { status:true, message: `Item  '${item.name}' count updated successfully`};
}
else return { status:false, message: `Item '${item.name}'  is not present in inventory`};
}
}


const getList = () => {
   return inventory
}

return {
   add:addItem,
   update_Count:updateCount,
   remove:removeItem,
   getList,

}
}

function add_item(){
   const itemname = document.getElementById("item-name").value;
   let itemcount = document.getElementById("item-count").value;

   document.getElementById("item-name").value = "";
   document.getElementById("item-count").value = "";

if(itemname == ""){
   showtoast("please enter item name",true);
   return;
}

if(itemcount == ""){
  itemcount = 0;
   
}


 
   inventoryobj = inventoryList();
   item = {
       name : itemname,
       count:  itemcount
   }
 const addStatus =  inventoryobj.add(item);
  console.log(addStatus);

 if(addStatus.status){ 
     showtoast(addStatus.message,false);
     updateInventory();}

 else showtoast(addStatus.message,true);

   // console.log(itemname);
   // console.log(itemcount);
  console.log(inventoryobj.getList());
 
}
const inventoryBody = document.getElementById('inventory-body'); 
function updateInventory(){
inventoryBody.innerHTML = '';
const inventoryItems = inventoryobj.getList();

inventoryItems.forEach((invobj) => {
const tableRow = document.createElement('tr');
const itemNameData = document.createElement('td');
itemNameData.textContent = invobj.name;
const itemCountData = document.createElement('td');
itemCountData.textContent = invobj.count;
tableRow.appendChild(itemNameData);
tableRow.appendChild(itemCountData); 
inventoryBody.appendChild(tableRow);
})
}

function remove_item(item){
const itemname = document.getElementById("item-name").value;
   let itemcount = document.getElementById("item-count").value;
   document.getElementById("item-name").value = "";
   document.getElementById("item-count").value = "";
   if(itemname == ""){
   showtoast("please enter item name",true);
   return;
}

 
   item = {
       name : itemname,
       count:  itemcount
   }
   const addStatus =  inventoryobj.remove(item);
   console.log(inventoryobj.getList());
  
   if(addStatus.status){ 
     showtoast(addStatus.message,false);
     updateInventory();}

 else showtoast(addStatus.message,true);

}
function update_count(){
   inventoryobj = inventoryList();
   const itemname = document.getElementById("item-name").value;
   let itemcount = document.getElementById("item-count").value;
   document.getElementById("item-name").value = "";
   document.getElementById("item-count").value = "";
   if(itemname == ""){
   showtoast("please enter item name",true);
   return;
}

if(itemcount == ""){
   showtoast("please enter item count",true);
   return;
}
item = {
       name : itemname,
       count:  itemcount
   }
 const addStatus = inventoryobj.update_Count(item);

   console.log(inventoryobj.getList());
 if(addStatus.status){
   updateInventory();
  
     showtoast(addStatus.message,false);
 }
 else{
   showtoast(addStatus.message,true);
 }



}


function showtoast(message,error){
   const toastelement = document.createElement('div');
   toastelement.setAttribute('id','toast');
   toastelement.classList.add('toast');
   toastelement.textContent = message;
   if(error){
       toastelement.classList.add('toast-error');
}
else{
   toastelement.classList.add('toast-success');

}

   document.body.appendChild(toastelement);
   setTimeout(() => {
     document.getElementById('toast').remove();
   },2000)

}

