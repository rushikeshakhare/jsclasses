const inventoryList = () => {
    const inventory = [];

    const addItem = (name,count) => {
        if(!(inventory.find((item) => item.name === name))){
            inventory.push({name,count:parseInt(count)})
            return {status:true,message:`Item '${name}' Added To Inventory`};
        }
        else 
            return {status:false,message:`Item '${name}' Already Exists`};
    }

    const removeItem = (name) => {
        const itemIndex = inventory.findIndex((element) => element.name === name);
        if(itemIndex > -1){
            inventory.splice(itemIndex,1);
            return {status:true,message:`Item '${name} removed'`};
        }
        else return {status:false,message:`Item '${name}' Not Found`}; 
    }

    const listAllItems = () => {
        return inventory 
    }

    const updateCount = (name,count) => {
        const itemIndex = inventory.findIndex((element) => element.name === name);
        if(itemIndex > -1){
             inventory[itemIndex].count = parseInt(count);
             return {status:true,message:`Item '${name}' updated sucessuessfully`}

        }
        else return {status:false,message:`Item '${name}' Not Found`};
    }


    return {
        add:addItem,
        removeItem:removeItem,
        listAllItems,
        updateCount,
        
    }
   }