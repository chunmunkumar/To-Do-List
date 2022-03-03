const inputElem = document.querySelector('#ListInput')
let listview = document.querySelector('.listview');
console.log(listview);
 const addButton = document.querySelector('#addButton');
 console.log(addButton);



taskList=[];
addButton.addEventListener('click',()=>{
  
    taskList.push(inputElem.value);
    console.log(taskList);
    localStorage.setItem('inputElem', JSON.stringify(taskList));

    showcase();
    

})

showcase();


function showcase(){
     let output='';
    let localItems = JSON.parse(localStorage.getItem('inputElem'));
    console.log(localItems);
     if(localItems !== null){
         taskList=localItems;
     }

    taskList.map((item,index)=>{
        output +=` 
        <div class=" containor">
        <span>${item}</span><button onclick="deleteItem(${index})">Delete</button>
       
        </div> 
       `
       
    });
    
listview.innerHTML = output;

}


function deleteItem(index){
    taskList.splice(index,1);
    localStorage.setItem('inputElem', JSON.stringify(taskList));

    showcase();
    

}


