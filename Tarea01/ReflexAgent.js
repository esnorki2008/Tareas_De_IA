// MIT License
// Copyright (c) 2020 Luis Espino
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A")return "RIGHT";
    else if (location=="B") return "LEFT";
}

function genDirt(states,pos){
    if(pos!=flag){
        states[1] = "DIRTY"
        states[2] = "DIRTY"
        flag = pos
    }
}

function stateCMP(states){

    if(states[0]=="A"){
        document.getElementById("I1").src="./A.jpg";
        document.getElementById("I2").src="./D.jpg";
        if(states[1]=="CLEAN"){
            document.getElementById("I3").src="./C.jpg";
            if(states[2]=="CLEAN"){
                statesList[6]=statesList[6]+1
                document.getElementById("I4").src="./C.jpg";
                document.getElementById("e7").innerHTML=statesList[6].toString();
                genDirt(states,1)
            }else{
                document.getElementById("I4").src="./B.jpg";
                statesList[4]=statesList[4]+1
                document.getElementById("e5").innerHTML=statesList[4];
            }
        }else{
            document.getElementById("I3").src="./B.jpg";
            if(states[2]=="CLEAN"){
                document.getElementById("I4").src="./C.jpg";
                statesList[2]=statesList[2]+1
                document.getElementById("e3").innerHTML=statesList[2];
            }else{
                document.getElementById("I4").src="./B.jpg";
                statesList[0]=statesList[0]+1
                document.getElementById("e1").innerHTML=statesList[0];
            }
        }
    }else{
        document.getElementById("I1").src="./D.jpg";
        document.getElementById("I2").src="./A.jpg";
        if(states[1]=="CLEAN"){
            document.getElementById("I3").src="./C.jpg";
            if(states[2]=="CLEAN"){
                statesList[7]=statesList[7]+1
                document.getElementById("e8").innerHTML=statesList[7];
                document.getElementById("I4").src="./C.jpg";
                genDirt(states,2)
            }else{
                statesList[5]=statesList[5]+1
                document.getElementById("I4").src="./B.jpg";
                document.getElementById("e6").innerHTML=statesList[5];
            }
        }else{
            document.getElementById("I3").src="./B.jpg";
            if(states[2]=="CLEAN"){
                statesList[3]=statesList[3]+1
                document.getElementById("I4").src="./C.jpg";
                document.getElementById("e4").innerHTML=statesList[3];
            }else{
                statesList[1]=statesList[1]+1
                document.getElementById("I4").src="./B.jpg";
                document.getElementById("e2").innerHTML=statesList[1];
            }
        }
    }
}

function test(states){
        
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
        stateCMP(states)
        document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
        if (action_result == "CLEAN"){
                if (location == "A") states[1] = "CLEAN";
                else if (location == "B") states[2] = "CLEAN";
        }
        else if (action_result == "RIGHT") states[0] = "B";
        else if (action_result == "LEFT") states[0] = "A";	
	setTimeout(function(){ test(states); }, 3000);
}

var flag = 1;
var states = ["A","DIRTY","DIRTY"];
var statesList = [0,0,0,0,0,0,0,0]
test(states);