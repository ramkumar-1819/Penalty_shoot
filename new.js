
var score=[0,1];
var turn;
var x;
var y=document.getElementById("roww");

//team detail
var team1={
    name:"BARCELONA",
    points:[],
    score:0
}
//team detail
var team2={
    name:"MANCHESTER",
    points:[],
    score:0
}
window.onload = () =>{
    //decide turn
    selectturn();
    //update textbutton
    updatetextbutton();
    //updatescore
    updatescore();
    //updatename
    updatename();
    //buttonclick
   

}
var selectturn = () =>{
    turn = Math.round(Math.random())+1;
}
var updatetextbutton = () =>{
    var button = document.getElementById("btn");
    var res=document.getElementById("result");
    res.style.visibility="";
    if (team1.points.length===5 && team2.points.length===5){
        button.remove();
        res.textContent=team1.score==team2.score?"MATCH DRAW": `${team1.score>team2.score?team1.name : team2.name} wins`;
        res.style.fontSize="100px";
        y.remove();
        control();
    }
    else{
        turn=turn==1?2:1;
        button.textContent = `${turn === 1 ? team1.name: team2.name}'s KICK` ;
    }
}




var updatescore=()=>{
    document.getElementById("team-1-score").textContent=team1.score;
    document.getElementById("team-2-score").textContent=team2.score;
    updateruns();
}

var updatename= ()=>{
    document.getElementById("team1").textContent=team1.name;
    document.getElementById("team2").textContent=team2.name;
}

var buttonclick=()=>{
    var run=score[Math.floor(Math.random()*score.length)];
    if (turn==1){
        team1.points.push(run);
        team1.score=calculatescore(team1.points);
    }
    else {
        if (turn==2)
        team2.points.push(run);
        team2.score=calculatescore(team2.points);
    }
    updatescore();
    updatetextbutton();
        
}
var calculatescore=(runs)=>{
    return runs.reduce((total,num)=>total+num);
}
var updateruns=()=>{
    var t1=document.getElementById("team-1-run").children;
    var t2=document.getElementById("team-2-run").children;
    team1.points.forEach((val,index) => {
        if (val===1){
            t1[index].style.background="green";
        }
        else{
            t1[index].style.background="red";
        }
    })
    team2.points.forEach((val,index) => {
        if(val===1){
        t2[index].style.background="green";
        } 
        else{
            t2[index].style.background="red"; 
        }
    })
}


fun =()=>{
     document.body.style.background=rand();
     main();
 }
rand=()=>{
    return '#'+(Math.random()*1819102).toString(16);
}
main=()=>{
   fun();
}
control=()=>{
     setInterval(main,200)
}