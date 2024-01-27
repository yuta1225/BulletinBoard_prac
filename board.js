const msg = document.getElementById('msgbox');
const sent = document.getElementById('sentbtn');
const tl = document.getElementById('timeline');
const time = document.getElementById('time');

//現在日時を二桁にする関数
function timer2(num) {
    var ret;
    if (num<10) {
        ret = '0'+num;
    } else {
        ret = num;
    }
    return ret;
}

//現在日時を算出する関数
function timer() {
    var nowTime = new Date();
    var year = nowTime.getFullYear();
    var month = nowTime.getMonth();
    var date = timer2(nowTime.getDate());
    var hour = timer2(nowTime.getHours());
    var min = timer2(nowTime.getMinutes());
    var sec = timer2(nowTime.getSeconds());

    month = timer2(month+1);
    var now = year+'/'+month+'/'+date+' '+hour+':'+min+':'+sec;
    console.log(now);
    time.innerHTML = now;
    return {now:now};
}

//1秒ごとにtimer関数を実行して、現在時刻を表示する
setInterval('timer()', 1000);

//送信ボタンがクリックされた時に実行される関数
sent.onclick = function setmsg() {
    var ms = msg.value;
    console.log(ms);

    var n = tl.childElementCount;

    switch (ms) {
        case '':
            break;
            
        default:
            
        switch (n) {
            case '':
                n = 1;
                break;
        
            default:
                n = n+1;
        }
        console.log(n);
        const box = document.createElement('li');
        tl.appendChild(box);
        box.id = 'msg'+n;
        const m = document.getElementById('msg'+n);
        m.style.listStyleType='none';

        var ntime = timer();
        var ntime2 = ntime.now;

        //li内の記述内容
        m.innerHTML = n+'.'+ntime2+'.'+ms;
        
        //メッセージボックスの中身を空にする
        msg.value='';
    }
}