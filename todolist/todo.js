const input_string = document.getElementById('#input_string');
const addbutton = document.getElementById('#addbutton');
const listtodo = document.getElementById('#listtodo');
const deletetask = document.getElementById('#deletetask');
const editbutton = document.getElementById('#btnEdit');
view();
function save(){
 
    var new_data = "<br>" + document.querySelector('#input_string').value;

    if(localStorage.getItem('ongoing') == null){//checking if the ongoing key is null
        localStorage.setItem('ongoing','[]');//if it is null we create a new array
    }

    var old_data = JSON.parse(localStorage.getItem('ongoing'));//we convert data from array to string
    old_data.push(new_data);//pushing new data in old data

    localStorage.setItem('ongoing',JSON.stringify(old_data)); //pushing  the data
    
    view();
      

}

function view(){

if(localStorage.getItem('ongoing')!= null){

    document.getElementById('listtodo').innerHTML = JSON.parse(localStorage.getItem('ongoing'));
}


}

