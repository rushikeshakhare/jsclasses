<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
</head>
<style>

</style>

<body>

    <h1>
        Task
    </h1>
    <!-- <pre>
        Requirements

        1. We have to build a program for storing items and its count

        2. commands will be like 

        - add (ItemName) eg add Table
        
        - updateCount (ItemName) (count) updateCount Table 23
            
        - removeItem (ItemName) removeItem Table
            
        - listItem (ItemName) listItem Table output - Table 23
            
        - listAllItems listAllItems output - Table 23 
    </pre> -->
    <script>
        // console.log("Yash mahalle");
        const inventoryList = () => {
            const inventory = [];
            const addItem = (item) => {
                if (!(inventory.includes((element) => element.name === item))) {
                    inventory.push({
                        name: item,
                        count: 0
                    })
                } else {
                    console.log(`Item ${item} already Exists.`)
                }

                //     console.log(inventory);
                // if (item.count == undefined) {
                //     item.count = 0;
                // }
                // const repeat = inventory.filter((element) => element.name === item.name)
                // if (repeat == '') {
                //     inventory.push(item)
                // }

            }
            const updateCount = (name, count) => {
                const index = inventory.findIndex((element) => element.name === name)
                if (index > -1) {
                    inventory[index].count = count;
                } else {
                    console.log("element not found")
                }
                // inventory.forEach((element) => {
                //     if (item.name === element.name) {
                //         element.count = item.count;
                //     }
                // })
            }
            const removeItem = (item) => {
                const index = inventory.findIndex((element) => element.name === item)
                if (index > -1) {
                    inventory.splice(index, 1);
                }

            }
            const inventoryItem = (item) => {
                // return inventory.filter((element) => element.name === item.name)
                const index = inventory.findIndex((element) => element.name === item)
                if (index > -1) {
                    return inventory[index];
                } else {
                    console.log(`element ${item} not found`)
                }
            }
            const inventoryAllItems = () => {
                return inventory.length ? inventory : "NO items found.";
            }
            return {
                Add: addItem,
                updateCount,
                removeItem: removeItem,
                listItem: inventoryItem,
                listAllItem: inventoryAllItems
            }
        }

        function main(commands) {
            const inventoryObject = inventoryList();
            commands.forEach((command) => {
                const allParameters = command.split(" ");
                const currentCommand = command.split(" ")[0].toLowerCase();
                const currentParameter = command.split(" ")[1];
                // const Item = {
                //     name: name,
                //     count: count
                // };
                if (currentCommand === "add") {

                    return inventoryObject.Add(currentParameter);
                }
                if (currentCommand === "updatecount") {
                    const countParam = command.split(" ")[2];
                    return inventoryObject.updateCount(currentParameter, countParam);
                }
                if (currentCommand === "removeitem") {

                    return inventoryObject.removeItem(currentParameter);
                }
                if (currentCommand === "listitem") {
                    console.log("List of the ",currentParameter, " :", inventoryObject.listItem(currentParameter));
                }
                if (currentCommand === "listallitem") {
                    console.log("List of all Items :", inventoryObject.listAllItem());
                }
            })
        }
        main(['Add chair', 'Add table', 'updateCount table 239', 'listItem table','removeItem table', 'listAllItem'])
    </script>

</body>

</html>