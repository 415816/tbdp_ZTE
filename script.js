    //const startButton = document.querySelector('.startButton');       // получаем кнопку "Приступить к тесту"
    const butt = document.querySelector('.generate');                 // получаем кнопку "получить билет"
    const result = document.querySelector('.result');                 // получаем кнопку "результат"
    const cheets = document.querySelector('.cheets');                 // получаем кнопку "показать правильные ответы"
    const clos = document.querySelector('.clos');                     // получаем кнопку "ok" на всплывающем окне
    let score;                                                      // счетчик набранных баллов
    const trueAns = document.querySelector('.trueAns');               // получаем кнопку "Указать на неправильные ответы"    

    //отключаем действие на правую кнопку мыши
    document.querySelector('body').oncontextmenu = () => {return false};

    // закрываем приветственное окно
    //startButton.onclick = () => document.querySelector('.start').style.display = 'none';

    let q2;                                // переменные q будут содержать массивы данных для подстановки в вопросы
    let q3;
    let q4;
    let q5;
    let q06;
    let q7;
    let q8;
    let q9;
    let q10;
    let q11;
    let q012;
    let q212;
    let q312;
    let q412;
    let q13;
    let q14;

    // массивы данных для расчета правильных ответов на 10-ый вопрос
    const qt = [
        [0.0000035,     0,          0.00000332, 0,          0.0000015,  0,          0.00000745, 0,          0.0000029,  0         ],
        [0.0000078,     0.0000025,  0.0000021,  0.0000042,  0,          0.0000083,  0.0000049,  0.0000036,  0,          0         ],
        [0.0000012,     0,          0.0000023,  0.0000034,  0.0000098,  0,          0.0000091,  0.0000025,  0.0000065,  0         ],
        [0,             0.00000035, 0.00000096, 0.00000033, 0,          0.00000018, 0,          0,          0.00000059, 0.00000034],
        [0,             0,          0.00000004, 0.00000015, 0.00000009, 0,          0.00000092, 0.00000086, 0.00000041, 0         ],
        [0.00000055,    0.00000065, 0,          0,          0.00000015, 0.00000025, 0,          0.00000032, 0,          0.00000039],
        [0,             0.00000032, 0,          0.00000015, 0,          0.00000067, 0,          0.00000081, 0,          0.00000004],
        [0.00000015,    0,          0.00000051, 0,          0.00000024, 0.00000042, 0.00000089, 0,          0.00000072, 0.00000027],
        [0,             0.0000021,  0.0000082,  0.0000029,  0,          0.0000063,  0,          0.000005,   0.0000083,  0         ],
        [0,             0.0000027,  0,          0.0000039,  0,          0.0000076,  0,          0.0000026,  0,          0.0000042 ]
    ];
    const qts = [
        [0.099, 0.062,  0.025,  0.049,  0.067,  0.113,  0.072,  0.056,  0.009,  0.013],
        [0.057, 0.041,  0.058,  0.025,  0.151,  0.13,   0.018,  0.054,  0.023,  0.074],
        [0.039, 0.049,  0.05,   0.061,  0.018,  0.009,  0.128,  0.016,  0.098,  0.121],
        [0.122, 0.04,   0.141,  0.042,  0.073,  0.021,  0.073,  0.05,   0.121,  0.01 ],
        [0.016, 0.051,  0.144,  0.079,  0.002,  0.036,  0.08,   0.005,  0.103,  0.122],
        [0.117, 0.01,   0.072,  0.083,  0.023,  0.083,  0.016,  0.193,  0.003,  0.257],
        [0.074, 0.068,  0.027,  0.005,  0.04,   0.048,  0.081,  0.005,  0.047,  0.082],
        [0.024, 0.032,  0.04,   0.047,  0.027,  0.047,  0.019,  0.024,  0.067,  0.086],
        [0.046, 0.06,   0.013,  0.148,  0.006,  0.066,  0.086,  0.048,  0.025,  0.025],
        [0.008, 0.027,  0.014,  0.017,  0.028,  0.007,  0.012,  0.022,  0.022,  0.013]
    ];

    //массивы данных для расчета правильных ответов на 11 вопрос
    const lambda1 = [6.71,	3.18,	1.16,	3.72,	4.25,	0.82,	4.74,	0.70,	8.40,	0.59];
    const lambda2 = [0.0000246,	0.0000825,	0.0000279,	0.0000481,	0.0000149,	0.0000874,	0.0000287,	0.0000772,	0.0000976,	0.0000492];
    const Tu =      [0.028,	0.091,	0.036,	0.071,	0.032,	0.066,	0.084,	0.030,	0.016,	0.046];
    const k =       [0.0086,	0.0020,	0.0027,	0.0067,	0.0032,	0.0016,	0.0037,	0.0042,	0.0008,	0.0047];
    const mu2 =     [0.8,	    1.5,	1.4,	2.0,	0.9,	0.6,	1.7,	1.2,	1.9,	1.3];
    
    let j;
    let i;
    let m;
    let z;
    let c;
    let P2;
    let sigma1;
    let tauAO;
    let UrRisk;
    
    let FIO = document.querySelector('.inp0');          // получаем поле ввода ФИО
    let block = document.querySelector('.block');       // получаем сервый фон при всплывающем сообщении
    let mess = document.querySelector('.mess');         // получаем всплывающее сообщение
    let tex = document.querySelector('.tex');           // получаем поле вывода текста в всплывающем сообщении
    let ball;                                           // переменная в которую складывается полученный балл за правильные ответы
    
    let passClos = document.querySelector('.passClos'); // получаем поле ввода пароля для закрытия всплывающего сообщения
    let passAnsw = document.querySelector('.passAnsw'); // получаем поле ввода пароля для открытия правильных ответов
    
    const btnCalcStart = document.querySelector('.calcStart');
    const calcInp = document.querySelectorAll('.calcInp');
    const calcSumm = document.querySelector('.calcSumm');
    const calcSubtraction = document.querySelector('.calcSubtraction');
    const calcMultipl = document.querySelector('.calcMultipl');
    const calcDevide = document.querySelector('.calcDevide');
    const calculator = document.querySelector('.calculator-container');
    const showCalculator = document.querySelector('.showCalculator');

    btnCalcStart.onclick = () => {
      calcSumm.innerHTML = parseFloat(
        (
          parseFloat(calcInp[0].value.replace(",", ".")) +
          parseFloat(calcInp[1].value.replace(",", "."))
        ).toFixed(12)
      );
      calcSubtraction.innerHTML = parseFloat(
        (
          parseFloat(calcInp[2].value.replace(",", ".")) -
          parseFloat(calcInp[3].value.replace(",", "."))
        ).toFixed(12)
      );
      calcMultipl.innerHTML = parseFloat(
        (
          parseFloat(calcInp[4].value.replace(",", ".")) *
          parseFloat(calcInp[5].value.replace(",", "."))
        ).toFixed(12)
      );
      calcDevide.innerHTML = parseFloat(
        (
          parseFloat(calcInp[6].value.replace(",", ".")) /
          parseFloat(calcInp[7].value.replace(",", "."))
        ).toFixed(12)
      );
    };

    showCalculator.onclick = () => {
        calculator.classList.toggle("non");
    };


    butt.onclick = () => {
      if (FIO.value != 0) {
        document.querySelector(".start").style.display = "none";
        formQuest();
      }
    };                           // кнопка формирования билета (заполняются спаны случайными значениями)                   
    result.onclick = check;                             // запуск функции проверки ответов
    cheets.onclick = () => {if (passAnsw.value == 45) answers();}   // проверка условий для показа правильных ответов
    clos.onclick = () => {if (passClos.value == 12) closMess();}   // проверка условий для закрытия всплывающего окна
    trueAns.onclick = () => {if (passAnsw.value == 78) displayTrueAnswers();}

    // 35-минутный таймер
    let time = 35 * 60;
    let r = document.getElementById('r');
    let tmp = time;

    function formQuest() {
    
    setInterval(function(){
        let c = tmp--
        let m = (c / 60) >> 0
        let s = (c - m * 60) + '';
        r.textContent = 'Осталось ' + m + ':' + (s.length > 1 ? '' : '0') + s;
        if(m == 0 && s == 1) check();
        tmp != 0 || (tmp = time);
    },1000); 
           
    
    
    q2 = ['не', ''];                                // в переменных q содержатся массивы данных для подстановки в вопросы (в спаны)
    q3 = ['не', ''];
    q4 = ['нештатных неопасных', 'работоспособных', 'опасных', 'неработоспособных', 'нештатных'];
    q5 = ['опасного', 'штатного', 'защищенного', 'незащищенного', 'нештатного неопасного'];
    q06 = ['не', ''];
    q6 = ['поражающим', 'первичным поражающим', 'вторичным поражающим', 'дестабилизирующим'];
    q7 = ['небольшому повреждению технической системы', 'незначительным травмам', 'тяжелому повреждению системы', 'небольшим травмам', 'значительному ущербу для окружающей среды', 'полной потере технической системы', 'многочисленным пострадавшим'];
    q8 = ['имитационном моделировании', 'статистической информации', 'экспертной оценке', 'всей имеющейся информации', 'математическом моделировании'];
    q9 = ['перевод объекта инфраструктуры в защищенное состояние', 'факт присутствия помощника машиниста в кабине локомотива', 'изменение структуры технического средства', 'перераспределение функций между человеком и техническим средством', 'увеличение периодичности проведения технической учебы', 'увеличение периодичности технического обслуживания объектов инфраструктуры'];
    q10 = [`<i>Q</i><sub><i>t</i></sub>(<i>S<sub>ok</sub></i><sup>${Math.floor(Math.random() * (10 - 1)) + 1}</sup>)`, `<i>P</i><sub><i>t</i></sub>(<i>S<sub>ok</sub></i><sup>${Math.floor(Math.random() * (10 - 1)) + 1}</sup>)`];
    q11 = ['<i>P</i><sub>2</sub>', '&#964;<sub>AO</sub>', '&#963;<sub>1</sub>'];
    q012 = ['безопасности', 'безотказности'];
    q112 = [`${(Math.random() * (0.9 - 0.1) + 0.1).toFixed(2)}*10<sup>-${Math.floor(Math.random() * (7 - 1)) + 1}</sup>`];
    q212 = [Math.floor(Math.random() * (4000000 - 50)) + 50];
    q312 = ['незначительный', 'серьезный', 'критический', 'катастрофический'];
    q412 = [`${(Math.random() * (0.9 - 0.1) + 0.1).toFixed(2)}*10<sup>-${Math.floor(Math.random() * (7 - 1)) + 1}</sup>`];
    //q13 = ['t<sub>1</sub>-t<sub>2</sub>', 't<sub>2</sub>-t<sub>3</sub>', 't<sub>3</sub>-t<sub>4</sub>', 't<sub>4</sub>-t<sub>5</sub>'];
    q14 = ['происходит безопасная эксплуатация объекта инфраструктуры', 'возникает опасный отказ, но его устраняют до момента использования ОИ', 'возникает опасный отказ в процессе использования ОИ', 'возникает опасный отказ и его не успевают устранить', 'процесс движения поезда постоянно находился в опасном состоянии', 'произошел опасный отказ, но поражающие факторы не возникли'];

    let s20 = document.querySelector('#s20');
    s20.innerHTML = q2[Math.floor(Math.random()*q2.length)];    // заполняем спан в вопросе 2
    let s30 = document.querySelector('#s30');
    s30.innerHTML = q3[Math.floor(Math.random()*q3.length)];    // заполняем спан в вопросе 3  
    let s40 = document.querySelector('#s40');
    s40.innerHTML = q4[Math.floor(Math.random()*q4.length)];    // заполняем спан в вопросе 4   
    let s50 = document.querySelector('#s50');
    s50.innerHTML = q5[Math.floor(Math.random()*q5.length)];    // заполняем спан в вопросе 5
    let s60 = document.querySelector('#s60');
    s60.innerHTML = q06[Math.floor(Math.random()*q06.length)];  // заполняем спан 1 в вопросе 6
    let s61 = document.querySelector('#s61');
    s61.innerHTML = q6[Math.floor(Math.random()*q6.length)];    // заполняем спан 2 в вопросе 6
    let s70 = document.querySelector('#s70');
    s70.innerHTML = q7[Math.floor(Math.random()*q7.length)];    // заполняем спан в вопросе 7
    let s80 = document.querySelector('#s80');
    s80.innerHTML = q8[Math.floor(Math.random()*q8.length)];    // заполняем спан в вопросе 8
    let s90 = document.querySelector('#s90');
    s90.innerHTML = q9[Math.floor(Math.random()*q9.length)];    // заполняем спан в вопросе 9
    let s10 = document.querySelector('#s100');
    s100.innerHTML = Math.floor(Math.random() * (9 - 0)) + 0;
    s100.innerHTML += Math.floor(Math.random() * (9 - 0)) + 0;  // заполняем спан 1 в вопросе 10
    let s101 = document.querySelector('#s101');
    s101.innerHTML = q10[Math.floor(Math.random()*q10.length)]; // заполняем спан 2 в вопросе 10 
    let s11 = document.querySelector('#s110');
    s110.innerHTML = Math.floor(Math.random() * (9 - 0)) + 0;
    s110.innerHTML += Math.floor(Math.random() * (9 - 0)) + 0;  // заполняем спан 1 в вопросе 11
    let s111 = document.querySelector('#s111');
    s111.innerHTML = q11[Math.floor(Math.random()*q11.length)]; // заполняем спан 2 в вопросе 11
    let s120 = document.querySelector('#s120');
    s120.innerHTML = q012[Math.floor(Math.random()*q012.length)];   // заполняем спан 1 в вопросе 12
    let s121 = document.querySelector('#s121');
    s121.innerHTML = q112[Math.floor(Math.random()*q112.length)];   // заполняем спан 2 в вопросе 12
    let s122 = document.querySelector('#s122');
    s122.innerHTML = q212[Math.floor(Math.random()*q212.length)];   // заполняем спан 3 в вопросе 12
    let s123 = document.querySelector('#s123');
    s123.innerHTML = q312[Math.floor(Math.random()*q312.length)];   // заполняем спан 4 в вопросе 12
    let s124 = document.querySelector('#s124');
    s124.innerHTML = q412[Math.floor(Math.random()*q412.length)];   // заполняем спан 5 в вопросе 12
    //let s130 = document.querySelector('#s130');
    //s130.innerHTML = q13[Math.floor(Math.random()*q13.length)];     // заполняем спан 1 в вопросе 13
    let s131 = document.querySelector('#s131');
    s131.innerHTML = q14[Math.floor(Math.random()*q14.length)];     // заполняем спан 2 в вопросе 13  
}

// функция проверки правильности ответов
function check() {
    let inp1 = document.querySelector('.inp1');                     // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp2 = document.querySelectorAll('.inp2');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp3 = document.querySelectorAll('.inp3');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp4 = document.querySelectorAll('.inp4');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp5 = document.querySelectorAll('.inp5');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp6 = document.querySelectorAll('.inp6');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp7 = document.querySelector('.inp7');                     // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp8 = document.querySelectorAll('.inp8');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp9 = document.querySelectorAll('.inp9');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp10 = document.querySelector('.inp10');                   // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp11 = document.querySelector('.inp11');                   // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp12 = document.querySelector('.inp12');                    // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp13 = document.querySelector('.inp13');                    // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)

    score = 0;
    // проверка правильности ответа на первый вопрос:
    if (inp1.value.toUpperCase() == 'КООРДИНАТА' || inp1.value.toUpperCase() == 'МЕСТОПОЛОЖЕНИЕ') {score += 1;}
    // проверка правильности ответа на второй вопрос:
    if (s20.innerHTML == 'не' && inp2[0].checked && inp2[1].checked == false && inp2[2].checked == false && inp2[3].checked == false) {score += 1;}
    if (s20.innerHTML == '' && inp2[0].checked == false && inp2[1].checked && inp2[2].checked && inp2[3].checked) {score += 1;}
    // проверка правильности ответа на третий вопрос:
    if (s30.innerHTML == 'не' && inp3[0].checked == false && inp3[1].checked && inp3[2].checked == false && inp3[3].checked && inp3[4].checked && inp3[5].checked == false && inp3[6].checked == false && inp3[7].checked) {score += 1;}
    if (s30.innerHTML == '' && inp3[0].checked && inp3[1].checked == false && inp3[2].checked && inp3[3].checked == false && inp3[4].checked == false && inp3[5].checked && inp3[6].checked  && inp3[7].checked== false) {score += 1;}
    // проверка правильности ответа на четвертый вопрос:
    if (s40.innerHTML == 'нештатных неопасных' && inp4[0].checked == false && inp4[1].checked == false && inp4[2].checked && inp4[3].checked && inp4[4].checked == false) {score += 1;}
    if (s40.innerHTML == 'работоспособных' && inp4[0].checked == false && inp4[1].checked && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked == false) {score += 1;}
    if (s40.innerHTML == 'опасных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked == false) {score += 1;}
    if (s40.innerHTML == 'неработоспособных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked) {score += 1;}
    if (s40.innerHTML == 'нештатных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked) {score += 1;}
    // проверка правильности ответа на пятый вопрос:
    if (s50.innerHTML == 'опасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked == false && inp5[4].checked == false) {score += 1;}
    if (s50.innerHTML == 'опасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked && inp5[4].checked == false) {score += 1;}
    if (s50.innerHTML == 'штатного' && inp5[0].checked && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked && inp5[4].checked == false) {score += 1;}
    if (s50.innerHTML == 'защищенного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked == false && inp5[4].checked == false) {score += 1;}
    if (s50.innerHTML == 'незащищенного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked && inp5[4].checked == false) {score += 1;}
    if (s50.innerHTML == 'нештатного неопасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked && inp5[4].checked == false) {score += 1;}
    // проверка правильности ответа на шестой вопрос:
    if (s60.innerHTML == 'не' && s61.innerHTML == 'поражающим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked == false && inp6[14].checked == false ){score += 1;}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'первичным поражающим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked && inp6[3].checked && inp6[4].checked && inp6[5].checked && inp6[6].checked && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked && inp6[14].checked){score += 1;}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'вторичным поражающим' && inp6[0].checked && inp6[1].checked && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked && inp6[13].checked == false && inp6[14].checked == false){score += 1;}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'дестабилизирующим' && inp6[0].checked == false && inp6[1].checked && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked && inp6[14].checked){score += 1;}
    if (s60.innerHTML == ''   && s61.innerHTML == 'поражающим'  && inp6[0].checked == false && inp6[1].checked && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked && inp6[14].checked){score += 1;}
    if (s60.innerHTML == ''   && s61.innerHTML == 'первичным поражающим' && inp6[0].checked == false && inp6[1].checked && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked == false && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked == false && inp6[14].checked == false){score += 1;}
    if (s60.innerHTML == ''   && s61.innerHTML == 'вторичным поражающим' && inp6[0].checked == false && inp6[1].checked == false && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked == false && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked == false && inp6[13].checked && inp6[14].checked){score += 1;}
    if (s60.innerHTML == ''   && s61.innerHTML == 'дестабилизирующим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked == false && inp6[14].checked == false ){score += 1;}
    // проверка правильности ответа на седьмой вопрос:
    if ((s70.innerHTML == 'небольшому повреждению технической системы') && ((inp7.value.toUpperCase() == 'НЕЗНАЧИТЕЛЬНЫЙ') )) {score += 2;}
    if ((s70.innerHTML == 'незначительным травмам') && ((inp7.value.toUpperCase() == 'НЕЗНАЧИТЕЛЬНЫЙ') )) {score += 2;}
    if ((s70.innerHTML == 'тяжелому повреждению системы') && ((inp7.value.toUpperCase() == 'НЕСУЩЕСТВЕННЫЙ') )) {score += 2;}
    if ((s70.innerHTML == 'небольшим травмам') && ((inp7.value.toUpperCase() == 'НЕСУЩЕСТВЕННЫЙ'))) {score += 2;}
    if ((s70.innerHTML == 'значительному ущербу для окружающей среды') && (inp7.value.toUpperCase() == ('КРИТИЧЕСКИЙ'))) {score += 2;}
    if ((s70.innerHTML == 'полной потере технической системы') && ((inp7.value.toUpperCase() == 'КРИТИЧЕСКИЙ'))) {score += 2;}
    if ((s70.innerHTML == 'многочисленным пострадавшим') && ((inp7.value.toUpperCase() == 'КАТАСТРОФИЧЕСКИЙ'))) {score += 2;}
    // проверка правильности ответа на восьмой вопрос:
    if (s80.innerHTML == 'имитационном моделировании'   && inp8[0].checked          && inp8[1].checked == false && inp8[2].checked) {score += 1;}
    if (s80.innerHTML == 'статистической информации'    && inp8[0].checked == false && inp8[1].checked          && inp8[2].checked) {score += 1;}
    if (s80.innerHTML == 'экспертной оценке'            && inp8[0].checked          && inp8[1].checked == false && inp8[2].checked) {score += 1;}
    if (s80.innerHTML == 'всей имеющейся информации'    && inp8[0].checked == false && inp8[1].checked == false && inp8[2].checked) {score += 1;}
    if (s80.innerHTML == 'математическом моделировании' && inp8[0].checked          && inp8[1].checked == false && inp8[2].checked) {score += 1;}
    // проверка правильности ответа на девятый вопрос:
    if (s90.innerHTML == 'перевод объекта инфраструктуры в защищенное состояние' && inp9[0].checked && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {score += 1;}
    if (s90.innerHTML == 'факт присутствия помощника машиниста в кабине локомотива' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked && inp9[4].checked == false && inp9[5].checked == false) {score += 1;}
    if (s90.innerHTML == 'изменение структуры технического средства' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {score += 1;}
    if (s90.innerHTML == 'перераспределение функций между человеком и техническим средством' && inp9[0].checked == false && inp9[1].checked && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {score += 1;}
    if (s90.innerHTML == 'увеличение периодичности проведения технической учебы' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked) {score += 1;}
    if (s90.innerHTML == 'увеличение периодичности технического обслуживания объектов инфраструктуры' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked && inp9[5].checked == false) {score += 1;}
    // проверка правильности ответа на деcятый вопрос:
    j = s100.innerHTML[0];
    i = s100.innerHTML[1];
    m = s101.innerHTML[54] - 1;
    
    if (parseFloat(inp10.value.replace(',', '.')).toFixed(9) == (qts[j][m] * qt[i][m]).toFixed(9) && s101.innerHTML[3] == "Q") {score += 3;}
    /* console.log(qt[i][m]);
    console.log(qts[j][m]);
    console.log('QTSOK = ' + (qts[j][m] * qt[i][m]).toFixed(9));
    console.log(+inp10.value.replace(',', '.')); */
    if (+inp10.value.replace(',', '.') == (1 - (qts[j][m] * qt[i][m]).toFixed(9)) && s101.innerHTML[3] == "P") {score += 3;}
    // проверка правильности ответа на одиннадцатый вопрос:
    z = s110.innerHTML[0];
    c = s110.innerHTML[1];
    P2 = (lambda2[z]/(lambda2[z] + mu2[z])).toFixed(6);
    sigma1 = ((lambda1[z] / (1 / Tu[c])) + (lambda2[z] / mu2[z])).toFixed(6);
    tauAO = ((Tu[c] * (k[c] / mu2[z])) / (Tu[c] + (k[c] / mu2[z]))).toFixed(6);
    /* console.log('sigma1 = ' + sigma1);
    console.log('P2 = ' + P2);
    console.log('tauAO = ' + tauAO); */
    if (s111.innerHTML[6] == '1' && inp11.value.replace(',', '.') == sigma1) {score += 3;}
    if (s111.innerHTML[6] == 'i' && inp11.value.replace(',', '.') == P2) {score += 3;}
    if (s111.innerHTML[6] == 'A' && inp11.value.replace(',', '.') == tauAO) {score += 3;}
    // проверка правильности ответа на двенадцатый вопрос:
    UrRisk = '';
    if (s120.innerHTML == 'безопасности') {
        if (+s121.innerHTML[13] >= 7) {UrRisk += 'М';}
        else if (+s121.innerHTML[13] >= 5) {UrRisk += 'К';}
            else if (+s121.innerHTML[13] >= 3) {UrRisk += 'Р';}
                else if (+s121.innerHTML[13] >= 1) {UrRisk += 'С';}
                    else if (+s121.innerHTML[13] >= 0) {UrRisk += 'В';}
                        else if (+s121.innerHTML[13] <= 1) {UrRisk += 'Ч';}
        if (s123.innerHTML == 'незначительный')   {UrRisk += 1;}
            if (s123.innerHTML == 'серьезный')        {UrRisk += 2;}
                if (s123.innerHTML == 'критический')      {UrRisk += 3;}
                    if (s123.innerHTML == 'катастрофический') {UrRisk += 4;}
    }
    if (s120.innerHTML == 'безотказности') {
        if (+s124.innerHTML[13] >= 7) {UrRisk += 'М';}
        else if (+s124.innerHTML[13] >= 5) {UrRisk += 'К';}
            else if (+s124.innerHTML[13] >= 3) {UrRisk += 'Р';}
                else if (+s124.innerHTML[13] >= 1) {UrRisk += 'С';}
                    else if (+s124.innerHTML[13] >= 0) {UrRisk += 'В';}
                        else if (+s124.innerHTML[13] <= 1) {UrRisk += 'Ч';}
        if (s122.innerHTML < 50000) {UrRisk += 1;}
        else if (s122.innerHTML < 200000) {UrRisk += 2;}
            else if (s122.innerHTML < 4000000) {UrRisk += 3;}
                else if (s122.innerHTML > 4000000) {UrRisk += 4;}
    }
    if (inp12.value.toUpperCase() == UrRisk) {score += 2;}
    // проверка правильности ответа на тринадцатый вопрос:
    if ((inp13.value.toUpperCase() == 'А') && s131.innerHTML == 'происходит безопасная эксплуатация объекта инфраструктуры') {score += 3;}
    if ((inp13.value.toUpperCase() == 'Г') && s131.innerHTML == 'возникает опасный отказ, но его устраняют до момента использования ОИ') {score += 3;}
    if ((inp13.value.toUpperCase() == 'В') && s131.innerHTML == 'возникает опасный отказ в процессе использования ОИ') {score += 3;}
    if ((inp13.value.toUpperCase() == 'Б' || inp13.value.toUpperCase() == 'Д') && s131.innerHTML == 'возникает опасный отказ и его не успевают устранить') {score += 3;}
    if ((inp13.value.toUpperCase() == 'Д') && s131.innerHTML == 'процесс движения поезда постоянно находился в опасном состоянии') {score += 3;}
    if ((inp13.value.toUpperCase() == 'Г') && s131.innerHTML == 'произошел опасный отказ, но поражающие факторы не возникли') {score += 3;}
    if (score > 18) {
        ball = '"отлично"! Оценка может быть выставлена в ведомость и зачетную книжку лишь при сданных контрольных работах (получено сообщение "к защите")';
    } else if (score > 14) {
        ball = '"хорошо". Оценка может быть выставлена в ведомость и зачетную книжку лишь при сданных контрольных работах (получено сообщение "к защите")';
    }   else if (score >= 11) {
        ball = '"удовлетворительно". Оценка может быть выставлена в ведомость и зачетную книжку лишь при сданных контрольных работах (получено сообщение "к защите")';
    }   else {ball = '"неудовлетворительно". Пересдача по вторникам, время и аудиторию Вы можете уточнить на стенде у 307 аудитории либо в группе ВК: https://vk.com/suti_roat';}
    tex.innerHTML = FIO.value + ', Вы набрали ' + score + ' балл(ов)' + '<br>' + '<br>' + 'Ваша оценка: ' + ball;
    block.style.display = 'block';

    console.log(score);
    
}

// закрытие всплывающего окна
function closMess() {
    passClos.value = '';
    block.style.display = 'none';
}

// функция вывода правильных ответов
function answers() {
    passAnsw.value = '';
    console.log('Правильные ответы: ');
    console.log('1. Координата');
    
    if (s20.innerHTML == 'не') {console.log('2. А');}
        else {console.log('2. Б; В; Г')}
    
    if (s30.innerHTML == 'не') {console.log('3. Б; Г; Д; И');}
        else {console.log('3. А; В; Е; Ж');}
    
    if (s40.innerHTML == 'нештатных неопасных') {console.log('4. В и Г');}
    if (s40.innerHTML == 'работоспособных') {console.log('4. Б');}
    if (s40.innerHTML == 'опасных') {console.log('4. А');}
    if (s40.innerHTML == 'неработоспособных') {console.log('4. А и Д');}
    if (s40.innerHTML == 'нештатных') {console.log('4. А и Д');}

    if (s50.innerHTML == 'опасного') {console.log('5. А или ничего');}
    if (s50.innerHTML == 'штатного') {console.log('5. А и Г');}
    if (s50.innerHTML == 'защищенного') {console.log('5. В');}
    if (s50.innerHTML == 'незащищенного') {console.log('5. В и Г');}
    if (s50.innerHTML == 'нештатного неопасного') {console.log('5. В и Г');}

    if (s60.innerHTML == 'не' && s61.innerHTML == 'поражающим') {console.log('6. А; Д; К; Л; М; Н');}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'первичным поражающим') {console.log('6. А; В; Г; Д; Е; Ж; К; Л; М; Н; Р; С');}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'вторичным поражающим') {console.log('6. А; Б; Д; И; К; Л; М; Н; П');}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'дестабилизирующим') {console.log('6. Б; В; Г; Е; Ж; И; П; Р; С');}
    if (s60.innerHTML == ''   && s61.innerHTML == 'поражающим') {console.log('6. Б; В; Г; Е; Ж; И; П; Р; С');}
    if (s60.innerHTML == ''   && s61.innerHTML == 'первичным поражающим') {console.log('6. Б; И; П');}
    if (s60.innerHTML == ''   && s61.innerHTML == 'вторичным поражающим') {console.log('6. В; Г; Е; Ж; Р; С');}
    if (s60.innerHTML == ''   && s61.innerHTML == 'дестабилизирующим') {console.log('6. А; Д; К; Л; М; Н');}

    if (s70.innerHTML == 'небольшому повреждению технической системы') {console.log ('7. незначительный');}
    if (s70.innerHTML == 'незначительным травмам') {console.log ('7. незначительный');}
    if (s70.innerHTML == 'тяжелому повреждению системы') {console.log ('7. несущественный');}
    if (s70.innerHTML == 'небольшим травмам') {console.log ('7. несущественный');}
    if (s70.innerHTML == 'значительному ущербу для окружающей среды') {console.log ('7. критический');}
    if (s70.innerHTML == 'полной потере технической системы') {console.log ('7. критический');}
    if (s70.innerHTML == 'многочисленным пострадавшим') {console.log ('7. катастрофический');}

    if (s80.innerHTML == 'имитационном моделировании') {console.log ('8. А и В');}
    if (s80.innerHTML == 'статистической информации') {console.log ('8. Б и В');}
    if (s80.innerHTML == 'экспертной оценке') {console.log ('8. А и В');}
    if (s80.innerHTML == 'всей имеющейся информации') {console.log ('8. В');}
    if (s80.innerHTML == 'математическом моделировании') {console.log ('8. А и В');}

    if (s90.innerHTML == 'перевод объекта инфраструктуры в защищенное состояние') {console.log ('9. А');}
    if (s90.innerHTML == 'факт присутствия помощника машиниста в кабине локомотива') {console.log ('9. Г');}
    if (s90.innerHTML == 'изменение структуры технического средства') {console.log ('9. В');}
    if (s90.innerHTML == 'перераспределение функций между человеком и техническим средством') {console.log ('9. Б');}
    if (s90.innerHTML == 'увеличение периодичности проведения технической учебы') {console.log ('9. Е');}
    if (s90.innerHTML == 'увеличение периодичности технического обслуживания объектов инфраструктуры') {console.log ('9. Д');}

    if (s101.innerHTML[3] == "Q") {console.log('10. ' + 'Qt(S/F) = ' + qts[j][m] + ', Qt(F) = ' +  qt[i][m] + ', Q = ' + (qts[j][m] * qt[i][m]).toFixed(9));}
    if (s101.innerHTML[3] == "P") {console.log('10. ' + 'Qt(S/F) = ' + qts[j][m] + ', Qt(F) = ' +  qt[i][m] + ', P = ' + (1 - (qts[j][m] * qt[i][m]).toFixed(9)));}

    if (s111.innerHTML[6] == '1') {console.log('11. ' + 'lambda1 = ' + lambda1[z] + ', Tu = ' + Tu[c] + ', lambda2 = ' + lambda2[z] + ', mu2 = ' + mu2[z] +  ', sigma = ' + sigma1);}
    if (s111.innerHTML[6] == 'i') {console.log('11. ' + 'lambda2 = ' + lambda2[z] + ', mu2 = ' + mu2[z] + ', P2 = ' + P2);}
    if (s111.innerHTML[6] == 'A') {console.log('11. ' + 'Tu = ' + Tu[c] + ', k = ' + k[c] + ', mu2 = ' + mu2[z] + ', tauAO = ' + tauAO);}

    console.log('12. ' + UrRisk);
    
    if (s131.innerHTML == 'происходит безопасная эксплуатация объекта инфраструктуры') {console.log('13. А');}
    if (s131.innerHTML == 'возникает опасный отказ, но его устраняют до момента использования ОИ') {console.log('13. Г');}
    if (s131.innerHTML == 'возникает опасный отказ в процессе использования ОИ') {console.log('13. В');}
    if (s131.innerHTML == 'возникает опасный отказ и его не успевают устранить') {console.log('13. Б или Д');}
    if (s131.innerHTML == 'процесс движения поезда постоянно находился в опасном состоянии') {console.log('13. Д');}
    if (s131.innerHTML == 'произошел опасный отказ, но поражающие факторы не возникли') {console.log('13. Г');}
    
}

// функция выделения правильных ответов
function displayTrueAnswers(){
    passAnsw.value = '';

    let inp1 = document.querySelector('.inp1');                     // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp2 = document.querySelectorAll('.inp2');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp3 = document.querySelectorAll('.inp3');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp4 = document.querySelectorAll('.inp4');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp5 = document.querySelectorAll('.inp5');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp6 = document.querySelectorAll('.inp6');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp7 = document.querySelector('.inp7');                     // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp8 = document.querySelectorAll('.inp8');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp9 = document.querySelectorAll('.inp9');                  // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp10 = document.querySelector('.inp10');                   // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp11 = document.querySelector('.inp11');                   // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp12 = document.querySelector('.inp12');                    // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)
    let inp13 = document.querySelector('.inp13');                    // в переменных берутся инпуты: чек-боксы и поля ввода (введенные ответы)

    // проверка правильности ответа на первый вопрос:
    if (inp1.value.toUpperCase() == 'КООРДИНАТА' || inp1.value.toUpperCase() == 'МЕСТОПОЛОЖЕНИЕ') {document.querySelector('.qu1').classList.toggle('trueAnswer');}
    // проверка правильности ответа на второй вопрос:
    if (s20.innerHTML == 'не' && inp2[0].checked && inp2[1].checked == false && inp2[2].checked == false && inp2[3].checked == false) {document.querySelector('.qu2').classList.toggle('trueAnswer');}
    if (s20.innerHTML == '' && inp2[0].checked == false && inp2[1].checked && inp2[2].checked && inp2[3].checked) {document.querySelector('.qu2').classList.toggle('trueAnswer');}
    // проверка правильности ответа на третий вопрос:
    if (s30.innerHTML == 'не' && inp3[0].checked == false && inp3[1].checked && inp3[2].checked == false && inp3[3].checked && inp3[4].checked && inp3[5].checked == false && inp3[6].checked == false && inp3[7].checked) {document.querySelector('.qu3').classList.toggle('trueAnswer');}
    if (s30.innerHTML == '' && inp3[0].checked && inp3[1].checked == false && inp3[2].checked && inp3[3].checked == false && inp3[4].checked == false && inp3[5].checked && inp3[6].checked  && inp3[7].checked== false) {document.querySelector('.qu3').classList.toggle('trueAnswer');}
    // проверка правильности ответа на четвертый вопрос:
    if (s40.innerHTML == 'нештатных неопасных' && inp4[0].checked == false && inp4[1].checked == false && inp4[2].checked && inp4[3].checked && inp4[4].checked == false) {document.querySelector('.qu4').classList.toggle('trueAnswer');}
    if (s40.innerHTML == 'работоспособных' && inp4[0].checked == false && inp4[1].checked && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked == false) {document.querySelector('.qu4').classList.toggle('trueAnswer');}
    if (s40.innerHTML == 'опасных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked == false) {document.querySelector('.qu4').classList.toggle('trueAnswer');}
    if (s40.innerHTML == 'неработоспособных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked) {document.querySelector('.qu4').classList.toggle('trueAnswer');}
    if (s40.innerHTML == 'нештатных' && inp4[0].checked && inp4[1].checked == false && inp4[2].checked == false && inp4[3].checked == false && inp4[4].checked) {document.querySelector('.qu4').classList.toggle('trueAnswer');}
    // проверка правильности ответа на пятый вопрос:
    if (s50.innerHTML == 'опасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked == false && inp5[4].checked == false) {document.querySelector('.qu5').classList.toggle('trueAnswer');}
    if (s50.innerHTML == 'опасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked && inp5[4].checked == false) {document.querySelector('.qu5').classList.toggle('trueAnswer');}
    if (s50.innerHTML == 'штатного' && inp5[0].checked && inp5[1].checked == false && inp5[2].checked == false && inp5[3].checked && inp5[4].checked == false) {document.querySelector('.qu5').classList.toggle('trueAnswer');}
    if (s50.innerHTML == 'защищенного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked == false && inp5[4].checked == false) {document.querySelector('.qu5').classList.toggle('trueAnswer');}
    if (s50.innerHTML == 'незащищенного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked && inp5[4].checked == false) {document.querySelector('.qu5').classList.toggle('trueAnswer');}
    if (s50.innerHTML == 'нештатного неопасного' && inp5[0].checked == false && inp5[1].checked == false && inp5[2].checked && inp5[3].checked && inp5[4].checked == false) {document.querySelector('.qu5').classList.toggle('trueAnswer');}
    // проверка правильности ответа на шестой вопрос:
    if (s60.innerHTML == 'не' && s61.innerHTML == 'поражающим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked == false && inp6[14].checked == false ){document.querySelector('.qu6').classList.toggle('trueAnswer');}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'первичным поражающим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked && inp6[3].checked && inp6[4].checked && inp6[5].checked && inp6[6].checked && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked && inp6[14].checked){document.querySelector('.qu6').classList.toggle('trueAnswer');}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'вторичным поражающим' && inp6[0].checked && inp6[1].checked && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked && inp6[13].checked == false && inp6[14].checked == false){document.querySelector('.qu6').classList.toggle('trueAnswer');}
    if (s60.innerHTML == 'не' && s61.innerHTML == 'дестабилизирующим' && inp6[0].checked == false && inp6[1].checked && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked && inp6[14].checked){document.querySelector('.qu6').classList.toggle('trueAnswer');}
    if (s60.innerHTML == ''   && s61.innerHTML == 'поражающим'  && inp6[0].checked == false && inp6[1].checked && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked && inp6[14].checked){document.querySelector('.qu6').classList.toggle('trueAnswer');}
    if (s60.innerHTML == ''   && s61.innerHTML == 'первичным поражающим' && inp6[0].checked == false && inp6[1].checked && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked == false && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked && inp6[13].checked == false && inp6[14].checked == false){document.querySelector('.qu6').classList.toggle('trueAnswer');}
    if (s60.innerHTML == ''   && s61.innerHTML == 'вторичным поражающим' && inp6[0].checked == false && inp6[1].checked == false && inp6[2].checked && inp6[3].checked && inp6[4].checked == false && inp6[5].checked && inp6[6].checked && inp6[7].checked == false && inp6[8].checked == false && inp6[9].checked == false && inp6[10].checked == false && inp6[11].checked == false && inp6[12].checked == false && inp6[13].checked && inp6[14].checked){document.querySelector('.qu6').classList.toggle('trueAnswer');}
    if (s60.innerHTML == ''   && s61.innerHTML == 'дестабилизирующим' && inp6[0].checked && inp6[1].checked == false && inp6[2].checked == false && inp6[3].checked == false && inp6[4].checked && inp6[5].checked == false && inp6[6].checked == false && inp6[7].checked == false && inp6[8].checked && inp6[9].checked && inp6[10].checked && inp6[11].checked && inp6[12].checked == false && inp6[13].checked == false && inp6[14].checked == false ){document.querySelector('.qu6').classList.toggle('trueAnswer');}
    // проверка правильности ответа на седьмой вопрос:
    if ((s70.innerHTML == 'небольшому повреждению технической системы') && ((inp7.value == 'незначительный') || (inp7.value == 'Незначительный'))) {document.querySelector('.qu7').classList.toggle('trueAnswer');}
    if ((s70.innerHTML == 'незначительным травмам') && ((inp7.value == 'незначительный') || (inp7.value == 'Незначительный'))) {document.querySelector('.qu7').classList.toggle('trueAnswer');}
    if ((s70.innerHTML == 'тяжелому повреждению системы') && ((inp7.value == 'несущественный') || (inp7.value == 'Несущественный'))) {document.querySelector('.qu7').classList.toggle('trueAnswer');}
    if ((s70.innerHTML == 'небольшим травмам') && ((inp7.value == 'несущественный') || (inp7.value == 'Несущественный'))) {document.querySelector('.qu7').classList.toggle('trueAnswer');}
    if ((s70.innerHTML == 'значительному ущербу для окружающей среды') && (inp7.value == ('критический' || 'Критический'))) {document.querySelector('.qu7').classList.toggle('trueAnswer');}
    if ((s70.innerHTML == 'полной потере технической системы') && ((inp7.value == 'критический') || (inp7.value == 'Критический'))) {document.querySelector('.qu7').classList.toggle('trueAnswer');}
    if ((s70.innerHTML == 'многочисленным пострадавшим') && ((inp7.value == 'катастрофический') || (inp7.value == 'Катастрофический'))) {document.querySelector('.qu7').classList.toggle('trueAnswer');}
    // проверка правильности ответа на восьмой вопрос:
    if (s80.innerHTML == 'имитационном моделировании'   && inp8[0].checked          && inp8[1].checked == false && inp8[2].checked) {document.querySelector('.qu8').classList.toggle('trueAnswer');}
    if (s80.innerHTML == 'статистической информации'    && inp8[0].checked == false && inp8[1].checked          && inp8[2].checked) {document.querySelector('.qu8').classList.toggle('trueAnswer');}
    if (s80.innerHTML == 'экспертной оценке'            && inp8[0].checked          && inp8[1].checked == false && inp8[2].checked) {document.querySelector('.qu8').classList.toggle('trueAnswer');}
    if (s80.innerHTML == 'всей имеющейся информации'    && inp8[0].checked == false && inp8[1].checked == false && inp8[2].checked) {document.querySelector('.qu8').classList.toggle('trueAnswer');}
    if (s80.innerHTML == 'математическом моделировании' && inp8[0].checked          && inp8[1].checked == false && inp8[2].checked) {document.querySelector('.qu8').classList.toggle('trueAnswer');}
    // проверка правильности ответа на девятый вопрос:
    if (s90.innerHTML == 'перевод объекта инфраструктуры в защищенное состояние' && inp9[0].checked && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {document.querySelector('.qu9').classList.toggle('trueAnswer');}
    if (s90.innerHTML == 'факт присутствия помощника машиниста в кабине локомотива' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked && inp9[4].checked == false && inp9[5].checked == false) {document.querySelector('.qu9').classList.toggle('trueAnswer');}
    if (s90.innerHTML == 'изменение структуры технического средства' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {document.querySelector('.qu9').classList.toggle('trueAnswer');}
    if (s90.innerHTML == 'перераспределение функций между человеком и техническим средством' && inp9[0].checked == false && inp9[1].checked && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked == false) {document.querySelector('.qu9').classList.toggle('trueAnswer');}
    if (s90.innerHTML == 'увеличение периодичности проведения технической учебы' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked == false && inp9[5].checked) {document.querySelector('.qu9').classList.toggle('trueAnswer');}
    if (s90.innerHTML == 'увеличение периодичности технического обслуживания объектов инфраструктуры' && inp9[0].checked == false && inp9[1].checked == false && inp9[2].checked == false && inp9[3].checked == false && inp9[4].checked && inp9[5].checked == false) {document.querySelector('.qu9').classList.toggle('trueAnswer');}
    // проверка правильности ответа на деcятый вопрос:
    j = s100.innerHTML[0];
    i = s100.innerHTML[1];
    m = s101.innerHTML[54] - 1;
    
    if (parseFloat(inp10.value.replace(',', '.')).toFixed(9) == (qts[j][m] * qt[i][m]).toFixed(9) && s101.innerHTML[3] == "Q") {document.querySelector('.qu10').classList.toggle('trueAnswer');}

    if (+inp10.value.replace(',', '.') == (1 - (qts[j][m] * qt[i][m]).toFixed(9)) && s101.innerHTML[3] == "P") {document.querySelector('.qu10').classList.toggle('trueAnswer');}
    // проверка правильности ответа на одиннадцатый вопрос:
    z = s110.innerHTML[0];
    c = s110.innerHTML[1];
    P2 = (lambda2[z]/(lambda2[z] + mu2[z])).toFixed(6);
    sigma1 = ((lambda1[z] / (1 / Tu[c])) + (lambda2[z] / mu2[z])).toFixed(6);
    tauAO = ((Tu[c] * (k[c] / mu2[z])) / (Tu[c] + (k[c] / mu2[z]))).toFixed(6);

    if (s111.innerHTML[6] == '1' && inp11.value.replace(',', '.') == sigma1) {document.querySelector('.qu11').classList.toggle('trueAnswer');}
    if (s111.innerHTML[6] == 'i' && inp11.value.replace(',', '.') == P2) {document.querySelector('.qu11').classList.toggle('trueAnswer');}
    if (s111.innerHTML[6] == 'A' && inp11.value.replace(',', '.') == tauAO) {document.querySelector('.qu11').classList.toggle('trueAnswer');}
    // проверка правильности ответа на двенадцатый вопрос:
    UrRisk = '';
    if (s120.innerHTML == 'безопасности') {
        if (+s121.innerHTML[13] >= 7) {UrRisk += 'М';}
        else if (+s121.innerHTML[13] >= 5) {UrRisk += 'К';}
            else if (+s121.innerHTML[13] >= 3) {UrRisk += 'Р';}
                else if (+s121.innerHTML[13] >= 1) {UrRisk += 'С';}
                    else if (+s121.innerHTML[13] >= 0) {UrRisk += 'В';}
                        else if (+s121.innerHTML[13] <= 1) {UrRisk += 'Ч';}
        if (s123.innerHTML == 'незначительный')   {UrRisk += 1;}
            if (s123.innerHTML == 'серьезный')        {UrRisk += 2;}
                if (s123.innerHTML == 'критический')      {UrRisk += 3;}
                    if (s123.innerHTML == 'катастрофический') {UrRisk += 4;}
    }
    if (s120.innerHTML == 'безотказности') {
        if (+s124.innerHTML[13] >= 7) {UrRisk += 'М';}
        else if (+s124.innerHTML[13] >= 5) {UrRisk += 'К';}
            else if (+s124.innerHTML[13] >= 3) {UrRisk += 'Р';}
                else if (+s124.innerHTML[13] >= 1) {UrRisk += 'С';}
                    else if (+s124.innerHTML[13] >= 0) {UrRisk += 'В';}
                        else if (+s124.innerHTML[13] <= 1) {UrRisk += 'Ч';}
        if (s122.innerHTML < 50000) {UrRisk += 1;}
        else if (s122.innerHTML < 200000) {UrRisk += 2;}
            else if (s122.innerHTML < 4000000) {UrRisk += 3;}
                else if (s122.innerHTML > 4000000) {UrRisk += 4;}
    }
    if (inp12.value.toUpperCase() == UrRisk) {document.querySelector('.qu12').classList.toggle('trueAnswer');}
    // проверка правильности ответа на тринадцатый вопрос:
    if ((inp13.value == 'А' || inp13.value == 'а') && s131.innerHTML == 'происходит безопасная эксплуатация объекта инфраструктуры') {document.querySelector('.qu13').classList.toggle('trueAnswer');}
    if ((inp13.value == 'Г' || inp13.value == 'г') && s131.innerHTML == 'возникает опасный отказ, но его устраняют до момента использования ОИ') {document.querySelector('.qu13').classList.toggle('trueAnswer');}
    if ((inp13.value == 'В' || inp13.value == 'в') && s131.innerHTML == 'возникает опасный отказ в процессе использования ОИ') {document.querySelector('.qu13').classList.toggle('trueAnswer');}
    if ((inp13.value == 'Б' || inp13.value == 'б' || inp13.value == 'Д' || inp13.value == 'д') && s131.innerHTML == 'возникает опасный отказ и его не успевают устранить') {document.querySelector('.qu13').classList.toggle('trueAnswer');}
    if ((inp13.value == 'Д' || inp13.value == 'д') && s131.innerHTML == 'процесс движения поезда постоянно находился в опасном состоянии') {document.querySelector('.qu13').classList.toggle('trueAnswer');}
    if ((inp13.value == 'Г' || inp13.value == 'г') && s131.innerHTML == 'произошел опасный отказ, но поражающие факторы не возникли') {document.querySelector('.qu13').classList.toggle('trueAnswer');}

}