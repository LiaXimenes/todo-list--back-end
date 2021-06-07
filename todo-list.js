import readlineSync from "readline-sync";

const todos = [];
const options = ['add', 'list', 'remove'];
const index = readlineSync.keyInSelect(options, 'Which option do you want?');


function todoList(){
    while(true){
        if(index === 0){
            const option = readlineSync.question("What would you like to include?");
            todos.push(option);
            console.log("deu bom")
        } else if(index === 1){
            todos.map((item) => console.log(`${item}`));
            const option = readlineSync.question("What to-do would you like to check/uncheck?");
        }else if(index === 2 ){
            const option = readlineSync.question("What to-do would you like to remove")
        }
    }

}

todoList()




// 🔴
// 🟢
