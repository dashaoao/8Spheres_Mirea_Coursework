someFunc();
adv();

var size = document.documentElement.clientWidth;

window.addEventListener('resize', function() {
    if((size > 330 && document.documentElement.clientWidth <= 330) || (size < 330 && document.documentElement.clientWidth >= 330)){
        size = document.documentElement.clientWidth;
        someFunc();
    }
});

function someFunc(){
    if(document.documentElement.clientWidth < 330){
        var deg = 0;
        var rad = 100;
        var cx = 110;
        var cy = 110;
    } else {
        var deg = 0;
        var rad = 150;
        var cx = 160;
        var cy = 160;
    }
    bal_wheel(deg, rad, cx, cy);
}

function bal_wheel(deg, rad, cx, cy){
    var u = rad / 10;
    var svg = document.getElementsByTagName('svg')[0];
    svg.innerHTML = "";
    for(let i=10; i>=1; i--){
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        let c = `c${i}`;
        newElement.setAttribute("id",c);
        newElement.setAttribute("cx", cx);
        newElement.setAttribute("cy", cy);
        newElement.setAttribute("r", rad);
        svg.appendChild(newElement);

        for(let j=1; j<=8; j++){
            var s = localStorage.getItem(`s${j}`);
            var newElement2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
            let p = `p${j}`;
            newElement2.setAttribute("id", p);
            var d = str(deg, rad, cx, cy);
            newElement2.setAttribute("d", d);
            if (getCondition(s, i) != 1)
            {
                style(newElement2, j);
            }
            
            svg.appendChild(newElement2);
            deg += 45;
        }
        deg = 0;
        rad -= u;
    }
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function getX(deg, rad, cx){
    let r = toRadians(deg);
    cos = Math.cos(r);
    return cx + rad * cos;
}
function getY(deg, rad, cy){
    let r = toRadians(deg);
    sin = Math.sin(r);
    return cy + rad * sin;
}

function str(deg, rad, cx, cy){
    var s="";
    var M = "M" + cx + "," + cy + " ";
    var L = "L" + getX(deg, rad, cx) + "," + getY(deg, rad, cy) + " ";
    deg += 45;
    var A = "A" + rad + "," + rad + " 1 0,1 " + getX(deg, rad, cx) + "," + getY(deg, rad, cy) + " z"
    deg -= 45;
    s = M+L+A;
    return s;
}

function style(newElement2, j){
    if(j == 3){
        newElement2.style.fill = "#f4512bd9";
    }
    else if(j == 4){
        newElement2.style.fill = "#f42b5fd9";
    }
    else if(j == 5){
        newElement2.style.fill = "#9f2bf4d9";
    }
    else if(j == 6){
        newElement2.style.fill = "#3f51f2d9";
    }
    else if(j == 7){
        newElement2.style.fill = "#3fa5f2d9";
    }
    else if(j == 8){
        newElement2.style.fill = "#33b853d9";
    }
    else if(j == 1){
        newElement2.style.fill = "#f4df2bd9";
    }
    else{
        newElement2.style.fill = "#f4962bd9";
    }
}

function getCondition(s, i){
    var cond;
    if (s == 10){
        cond = (i != 1 && i != 2 && i != 3 && i != 4 && i != 5 && i != 6 && i != 7 && i != 8 && i != 9 && i != 10)
    }
    else if(s == 9){
        cond = (i != 1 && i != 2 && i != 3 && i != 4 && i != 5 && i != 6 && i != 7 && i != 8 && i != 9);
    }
    else if(s == 8){
        cond = (i != 1 && i != 2 && i != 3 && i != 4 && i != 5 && i != 6 && i != 7 && i != 8);
    }
    else if(s == 7){
        cond = (i != 1 && i != 2 && i != 3 && i != 4 && i != 5 && i != 6 && i != 7);
    }
    else if(s == 6){
        cond = (i != 1 && i != 2 && i != 3 && i != 4 && i != 5 && i != 6);
    }
    else if(s == 5){
        cond = (i != 1 && i != 2 && i != 3 && i != 4 && i != 5);
    }
    else if(s == 4){
        cond = (i != 1 && i != 2 && i != 3 && i != 4);
    }
    else if(s == 3){
        cond = (i != 1 && i != 2 && i != 3);
    }
    else if(s == 2){
        cond = (i != 1 && i != 2);
    }
    else if(s == 1){
        cond = (i != 1);
    }
    else{
        cond = (1);
    }
    return cond;
}

function adv(){
    var ul = document.getElementById('list');
    for (let i = 1; i <= 8; i++){
        var s = localStorage.getItem(`s${i}`);
        ul.children[i-1].innerHTML += `  -  ${s}/10`;
    }
    var adv = document.getElementById('advice');
    let low_count = 0;
    let data = "Вам следует обратить внимание на эти сферы:";

    for (let i = 1; i <= 8; i++){
        let s = localStorage.getItem(`s${i}`);
        if (s <= 4){
            low_count++;
            if (low_count == 1){
                let text1 = document.createElement('div');
                text1.setAttribute("id","text1");
                text1.textContent = data;
                adv.append(text1);
                var ul1 = document.createElement('ul');
                ul1.setAttribute("id","sp");
                adv.append(ul1);
            }
            data = sphere(i);
            var li1 = document.createElement('li');
            li1.textContent = data;
            li1.classList.toggle(`noMagic${i}`);
            ul1.append(li1);
        }
    }
}

function sphere(j){
    let st = "";
    if(j == 1){
        st = "Духовность";
    }
    else if(j == 2){
        st = "Саморазвитие";
    }
    else if(j == 3){
        st = "Карьера";
    }
    else if(j == 4){
        st = "Хобби";
    }
    else if(j == 5){
        st = "Друзья";
    }
    else if(j == 6){
        st = "Отдых";
    }
    else if(j == 7){
        st = "Семья";
    }
    else{
        st = "Здоровье";
    }
    return st;
}