$('.slider').slick({
    dots:true
}
);
$('.slider2').slick({
    dots:true
}
);

function change_fukuoka() {
    document.getElementById('held-places').style.backgroundImage = 'url("images/bg_branch-hakata.jpg")';
}

function change_kyoto() {
    document.getElementById('held-places').style.backgroundImage = 'url("images/bg_branch-kyoto.jpg")';
}
function change_hyogo() {
    document.getElementById('held-places').style.backgroundImage = 'url("images/hyogo.jpeg")';
}
function change_hokkaido() {
    document.getElementById('held-places').style.backgroundImage = 'url("images/hokkaido.jpeg")';
}
function change_kouchi() {
    document.getElementById('held-places').style.backgroundImage = 'url("images/bg_branch-kochi.jpg")';
}

function change_fukuoka2() {
    target = document.getElementById("output");
    target.innerHTML = "博多展";
    target = document.getElementById("output_list1");
    target.innerHTML = "開催期間";
    target = document.getElementById("output_list2");
    target.innerHTML = "開催場所";
    target = document.getElementById("output_list3");
    target.innerHTML = "主　　催";
    target = document.getElementById("output2");
    target.innerHTML = "2021年3月19日～2021年5月17日";
    target = document.getElementById("output3");
    target.innerHTML = "JR九州ホール（博多駅JR    博多シティ9F）<br>〒812-0012<br>福岡市博多区博多駅  中央街1-1 JR博多シティ９階";
    target = document.getElementById("output4");
    target.innerHTML = "アートアクアリウム博多実  行委員会<br>（お問い合わせTEL：0570-09-2424）";
  }
function change_kyoto2() {
    target = document.getElementById("output");
    target.innerHTML = "京都展";
    target = document.getElementById("output_list1");
    target.innerHTML = "開催期間";
    target = document.getElementById("output_list2");
    target.innerHTML = "開催場所";
    target = document.getElementById("output_list3");
    target.innerHTML = "主　　催";
    target = document.getElementById("output2");
    target.innerHTML = "2021年7月19日～2021年8月19日";
    target = document.getElementById("output3");
    target.innerHTML = "JR京都（京都駅JR  京都プラザ3F）<br>〒812-0012<br>京都府 中央街1-1 京都プラザ3階";
    target = document.getElementById("output4");
    target.innerHTML = "アートアクアリウム京都実行委員会<br>（お問い合わせTEL：0570-06-2424）";
  }
function change_hyogo2() {
    target = document.getElementById("output");
    target.innerHTML = "兵庫展";
    target = document.getElementById("output");
    target.innerHTML = "兵庫展";
    target = document.getElementById("output_list1");
    target.innerHTML = "開催期間";
    target = document.getElementById("output_list2");
    target.innerHTML = "開催場所";
    target = document.getElementById("output_list3");
    target.innerHTML = "主　　催";
    target = document.getElementById("output2");
    target.innerHTML = "2021年9月21日～2021年11月19日";
    target = document.getElementById("output3");
    target.innerHTML = "JR尼崎（尼崎駅JR  キューズモール尼崎店）<br>〒661-0047<br>兵庫県　尼崎市 西昆陽　２丁目";
    target = document.getElementById("output4");
    target.innerHTML = "アートアクアリウム兵庫実行委員会<br>（お問い合わせTEL：0570-07-2424）";
  }
function change_hokkaido2() {
    target = document.getElementById("output");
    target.innerHTML = "北海道展";
    target = document.getElementById("output_list1");
    target.innerHTML = "開催期間";
    target = document.getElementById("output_list2");
    target.innerHTML = "開催場所";
    target = document.getElementById("output_list3");
    target.innerHTML = "主　　催";
    target = document.getElementById("output2");
    target.innerHTML = "2021年12月21日～2021年1月14日";
    target = document.getElementById("output3");
    target.innerHTML = "JR札幌駅前<br>〒221-2112<br>北海道　札幌市 小樽　２丁目";
    target = document.getElementById("output4");
    target.innerHTML = "アートアクアリウム北海道実行委員会<br>（お問い合わせTEL：0570-11-2424）";
  }
function change_kouchi2() {
    target = document.getElementById("output");
    target.innerHTML = "高知展";
    target = document.getElementById("output_list1");
    target.innerHTML = "開催期間";
    target = document.getElementById("output_list2");
    target.innerHTML = "開催場所";
    target = document.getElementById("output_list3");
    target.innerHTML = "主　　催";
    target = document.getElementById("output2");
    target.innerHTML = "2021年3月21日～2021年5月14日";
    target = document.getElementById("output3");
    target.innerHTML = "高知高校<br>〒131-1924<br>高知県　綿貫市 ヒロト　筋トレ丁目";
    target = document.getElementById("output4");
    target.innerHTML = "アートアクアリウム日本語初めて話せた会<br>（お問い合わせTEL：0120-444-444）";
  }