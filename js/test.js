var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6 = 0;
var sum7 = 0;
var sum8 = 0;
var k = 1;

function next(){
    let num_inp = 0;
    if(k == 1){
        const submits = document.querySelectorAll('[type="radio"]');
        for(let i=0; i < submits.length; i++){
            if (submits[i].checked){
                sum1 += parseInt(submits[i].value);
                submits[i].checked = false;
                num_inp++;
            }
        }
        if(num_inp == 4){
            document.getElementById('q1').innerHTML = "5. Согласны ли вы с тем, что саморазвитие необходимо для улучшения качества жизни?";
            document.getElementById('q2').innerHTML = "6. Вам не сложно посвятить своё время прочтению полезной книги вместо просмотра любимого сериала/фильма?";
            document.getElementById('q3').innerHTML = "7. Вас устраивают темпы вашего саморазвития?";
            document.getElementById('q4').innerHTML = "8. Вас можно назвать развивающимся человеком?";
            k++;
        }
        else{
            alert("Пожалуйста, дайте ответ на все вопросы для получения наиболее точного результата.")
            sum1=0;
            num_inp=0;
        }
    }
    else if(k == 2){
        const submits = document.querySelectorAll('[type="radio"]');
        for(let i=0; i < submits.length; i++){
            if (submits[i].checked){
                sum2 += parseInt(submits[i].value);
                submits[i].checked = false;
                num_inp++;
            }
        }
        if(num_inp == 4){
            document.getElementById('q1').innerHTML = "9. Вы любите свою работу?";
            document.getElementById('q2').innerHTML = "10. Вы не часто работаете до изнеможения?";
            document.getElementById('q3').innerHTML = "11. Вас устраивает ваша заработная плата?";
            document.getElementById('q4').innerHTML = "12. Вы не хотели бы менять что-либо в этой сфере?";
            k++;
        }
        else{
            alert("Пожалуйста, дайте ответ на все вопросы для получения наиболее точного результата.")
            sum2=0;
            num_inp=0;
        }
    }
    else if(k == 3){
        const submits = document.querySelectorAll('[type="radio"]');
        for(let i=0; i < submits.length; i++){
            if (submits[i].checked){
                sum3 += parseInt(submits[i].value);
                submits[i].checked = false;
                num_inp++;
            }
        }
        if(num_inp == 4){
            document.getElementById('q1').innerHTML = "13. Есть ли у вас занятия, от которых вы получаете удовлетворение?";
            document.getElementById('q2').innerHTML = "14. Ваши увлечения помогают вам отдохнуть?";
            document.getElementById('q3').innerHTML = "15. Часто ли вы находите время на занятие любимым делом?";
            document.getElementById('q4').innerHTML = "16. У вас нет занятий, которые вы давно хотели попробовать, но всё время почему-то откладывали?";
            k++;
        }
        else{
            alert("Пожалуйста, дайте ответ на все вопросы для получения наиболее точного результата.")
            sum3=0;
            num_inp=0;
        }
    }
    else if(k == 4){
        const submits = document.querySelectorAll('[type="radio"]');
        for(let i=0; i < submits.length; i++){
            if (submits[i].checked){
                sum4 += parseInt(submits[i].value);
                submits[i].checked = false;
                num_inp++;
            }
        }
        if(num_inp == 4){
            document.getElementById('q1').innerHTML = "17. Довольны ли вы теми, с кем общаетесь?";
            document.getElementById('q2').innerHTML = "18. Получаете ли вы удовольствие от общения со своими друзьями?";
            document.getElementById('q3').innerHTML = "19. Часто ли вы заводите новые знакомства?";
            document.getElementById('q4').innerHTML = "20. Вы довольны количеством вашего общения с друзьями?";
            k++;
        }
        else{
            alert("Пожалуйста, дайте ответ на все вопросы для получения наиболее точного результата.")
            sum4=0;
            num_inp=0;
        }
    }
    else if(k == 5){
        const submits = document.querySelectorAll('[type="radio"]');
        for(let i=0; i < submits.length; i++){
            if (submits[i].checked){
                sum5 += parseInt(submits[i].value);
                submits[i].checked = false;
                num_inp++;
            }
        }
        if(num_inp == 4){
            document.getElementById('q1').innerHTML = "21. Хорошо ли вы высыпаетесь?";
            document.getElementById('q2').innerHTML = "22. Планируете ли вы свой отдых заранее?";
            document.getElementById('q3').innerHTML = "23. Считаете ли вы свой отдых интересным и разнообразным?";
            document.getElementById('q4').innerHTML = "24. Вы не чувствуете себя уставшим и разбитым к концу недели?";
            k++;
        }
        else{
            alert("Пожалуйста, дайте ответ на все вопросы для получения наиболее точного результата.")
            sum5=0;
            num_inp=0;
        }
    }
    else if(k == 6){
        const submits = document.querySelectorAll('[type="radio"]');
        for(let i=0; i < submits.length; i++){
            if (submits[i].checked){
                sum6 += parseInt(submits[i].value);
                submits[i].checked = false;
                num_inp++;
            }
        }
        if(num_inp == 4){
            document.getElementById('q1').innerHTML = "25. Довольны ли вы своей личной жизнью?";
            document.getElementById('q2').innerHTML = "26. Вы не хотели бы менять что-то в отношениях со своими родителями?";
            document.getElementById('q3').innerHTML = "27. С радостью ли вы возвращаетесь домой?";
            document.getElementById('q4').innerHTML = "28. Возникает ли у вас желание завести домашнее животное?";
            k++;
        }
        else{
            alert("Пожалуйста, дайте ответ на все вопросы для получения наиболее точного результата.")
            sum6=0;
            num_inp=0;
        }
    }
    else if(k == 7){
        const submits = document.querySelectorAll('[type="radio"]');
        for(let i=0; i < submits.length; i++){
            if (submits[i].checked){
                sum7 += parseInt(submits[i].value);
                submits[i].checked = false;
                num_inp++;
            }
        }
        if(num_inp == 4){
            document.getElementById('q1').innerHTML = "29. Вы не часто откладываете поход к врачу?";
            document.getElementById('q2').innerHTML = "30. Вы не чувствуете, что ваше тело старше вашего реального возраста?";
            document.getElementById('q3').innerHTML = "31. Не существует обстоятельств, которые мешали бы вам вести более здоровый образ жизни?";
            document.getElementById('q4').innerHTML = "32. У вас нет периодически тревожащих вас симптомов?";
            document.querySelector('.next').innerHTML = "Завершить тестирование";
            document.querySelector('.next').style.height = "70px";
            k++;
        }
        else{
            alert("Пожалуйста, дайте ответ на все вопросы для получения наиболее точного результата.")
            sum7=0;
            num_inp=0;
        }
    }
    else {
        const submits = document.querySelectorAll('[type="radio"]');
        for(let i=0; i < submits.length; i++){
            if (submits[i].checked){
                sum8 += parseInt(submits[i].value);
                submits[i].checked = false;
                num_inp++;
            }
        }
        if(num_inp == 4){
            result();
        }
        else{
            alert("Пожалуйста, дайте ответ на все вопросы для получения наиболее точного результата.")
            sum8=0;
            num_inp=0;
        }
    }
}
function result(){
    sum1 = (sum1/2).toFixed();
    sum2 = (sum2/2).toFixed();
    sum3 = (sum3/2).toFixed();
    sum4 = (sum4/2).toFixed();
    sum5 = (sum5/2).toFixed();
    sum6 = (sum6/2).toFixed();
    sum7 = (sum7/2).toFixed();
    sum8 = (sum8/2).toFixed();

    localStorage.setItem('s1', sum1);
    localStorage.setItem('s2', sum2);
    localStorage.setItem('s3', sum3);
    localStorage.setItem('s4', sum4);
    localStorage.setItem('s5', sum5);
    localStorage.setItem('s6', sum6);
    localStorage.setItem('s7', sum7);
    localStorage.setItem('s8', sum8);
    window.location.href = "https://dashaoao.github.io/sem_3_coursework/result.html";
}
