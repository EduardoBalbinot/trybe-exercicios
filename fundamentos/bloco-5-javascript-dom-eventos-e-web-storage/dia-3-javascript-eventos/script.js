let holidaysMarked = false;
let fridaysMarked = false;
let btnAdd = document.getElementById("btn-add").addEventListener("click", adicionarCompromisso);
document.getElementById("task-input").addEventListener("keyup", inputOnKeyUp);


function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysOfTheMonth(){
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  const monthDaysList = document.querySelector('#days');
  for(day of decemberDaysList){
    let li = document.createElement('li');
    li.innerText = day;
    li.className = "day";
    monthDaysList.appendChild(li);


    if(day == 24 || day == 25 || day == 31){
      li.className += " holiday";
    }

    if(day == 4 || day == 11 || day == 18 || day == 25){
      li.className += " friday";
    }

    li.style.cursor = 'default';

    li.addEventListener("mouseover", zoomElement);
    li.addEventListener("mouseout", unZoomElement);
    li.addEventListener("click", changeColor);
  }
  
}

function createHolidayButton(buttonName){
  let buttonsContainer = document.querySelector('.buttons-container');
  let btnHoliday = document.createElement('button');
  btnHoliday.innerText = buttonName;
  buttonsContainer.appendChild(btnHoliday);

  btnHoliday.addEventListener("click",function(){
    if(holidaysMarked){
      unmarkHolidays();
    }else{
      markHolidays();
    }
  });
}


function markHolidays(){
  let holidays = document.querySelectorAll(".holiday");

  for(holiday of holidays){
    holiday.style.backgroundColor = 'yellow';
  }
  holidaysMarked = true;
}

function unmarkHolidays(){
  let holidays = document.querySelectorAll(".holiday");

  for(holiday of holidays){
    holiday.style.backgroundColor = 'rgb(238,238,238)';
  }
  holidaysMarked = false;
}


function createFridayButton(buttonName){
  let buttonsContainer = document.querySelector('.buttons-container');
  let btnFriday = document.createElement('button');
  btnFriday.innerText = buttonName;
  buttonsContainer.appendChild(btnFriday);

  btnFriday.addEventListener("click",function(){
    if(fridaysMarked){
      unmarkFridays();
    }else{
      markFridays();
    }
  });
}

function markFridays(){
  let fridays = document.querySelectorAll(".friday");

  for(friday of fridays){
    friday.innerText = "Sextou";
  }
  fridaysMarked = true;
}

function unmarkFridays(){
  let fridays = document.querySelectorAll(".friday");
  let acrecimoDias = 0;

  for(friday of fridays){
    friday.innerText = 4+acrecimoDias;
    acrecimoDias += 7;
  }
  fridaysMarked = false;
}

function zoomElement(event){
  event.target.style.fontSize = '40px';
}

function unZoomElement(event){
  event.target.style.fontSize = '20px';
}

function createTask(taskName){
  let task = document.createElement("span");
  task.innerText = taskName;
  document.querySelector('.my-tasks').appendChild(task);
}

function createTaskSubtitle(cor){
  let div = document.createElement("div");
  div.className = "task";
  div.style.backgroundColor = cor;
  document.querySelector(".my-tasks").appendChild(div);

  div.addEventListener("click", selectTask);
}

function selectTask(event){
  
  if(event.target.className == "task"){
    event.target.className = "task selected";
  }else{
    event.target.className = "task";
  }
}

function changeColor(e){
  let selectedTask = document.querySelector(".selected");
  
  if(e.target.style.color == selectedTask.style.backgroundColor){
    e.target.style.color = 'rgb(119,119,119)';
  }else{
    e.target.style.color = selectedTask.style.backgroundColor;
  }
  //console.log(selectedTask);
  
}

function adicionarCompromisso(){
  let compromisso = document.createElement("li");
  let listaCompromissos = document.querySelector(".task-list");
  let input = document.getElementById("task-input");

  compromisso.innerText = input.value;
  listaCompromissos.appendChild(compromisso);
}

function inputOnKeyUp(e){
  if(e.key == "Enter"){
    adicionarCompromisso();
  }
}

createDaysOfTheWeek();
createDaysOfTheMonth();
createHolidayButton('Feriados');
createFridayButton('Sexta-feira');
createTask("teste");
createTaskSubtitle("green");
createTask("teste2");
createTaskSubtitle("red");

// Escreva seu código abaixo.