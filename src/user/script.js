// headerのハンバーガーメニューの動きここから
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
// headerのハンバーガーメニューの動きここまで

// 下にスクロール時footerのアイコンが消え、上にスクロールすると現れる動きここから

var beforePos = 0;//スクロールの値の比較用の設定


//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#footer').offset().top;//#footerの位置まできたら
    var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
		//IE11対策で処理を入れない
    }else if(elemTop < scroll || 0 < scroll - beforePos){
		//ヘッダーが上から出現する
		$('#mainFooter').removeClass('UpMove');	//#mainFooterにUpMoveというクラス名を除き
		$('#mainFooter').addClass('DownMove');//#mainFooterにDownMoveのクラス名を追加
    }else {
		//ヘッダーが上に消える
        $('#mainFooter').removeClass('DownMove');//#mainFooterにDownMoveというクラス名を除き
        $('#mainFooter').addClass('UpMove');//#mainFooterにUpMoveのクラス名を追加
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}

// タブの動きここから
document.addEventListener('DOMContentLoaded', function(){
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName('tab');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
  }

  // タブをクリックすると実行する関数
  function tabSwitch(){
    // タブのclassの値を変更
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    // コンテンツのclassの値を変更
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
  };
}, false);
// タブの動きここまで


// 企業への応募者の表示ここから
const panel = document.getElementById('tabApanel');
const memberDetail = document.getElementById('memberDetail');
const tabA = document.getElementById("tabA");
const showInfo = ({
    hidden,
    show
}) => {
    hidden.classList.remove('is-show');
    show.classList.add('is-show');
    tabA.innerHTML = "応募者一覧";// タブAの名前を変更
};

const returninfo = ({
  undo, display
}) => {
  undo.classList.remove('is-show');
  display.classList.add('is-show');
  tabA.innerHTML = "企業一覧";
}

// 企業への応募者の表示ここまで



// 月ごとの報酬を表示するここから

// 見たい月を動的に変更できるようにするここから
const today = new Date();
const monthText = document.getElementById("monthText");
var todayMonth = today.getMonth()+1;
monthText.innerHTML = `${todayMonth}月`;
function prev(){
  todayMonth -= 1;
  if(todayMonth<1){
    todayMonth = 12;
  }
  monthText.innerHTML = `${todayMonth}月`;
}
function next(){
  todayMonth += 1;
  if(todayMonth>12){
    todayMonth = 1;
  }
  monthText.innerHTML = `${todayMonth}月`;
}

// 見たい月を動的に変更できるようにするここまで

// 月ごとの報酬を表示するここまで




// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});


// 下にスクロール時footerのアイコンが消え、上にスクロールすると現れる動きここまで


//form関連ここから
// 「確認する」ボタンを押したらformの入力値を保存するここから


// formの入力値を保存するここまで

// メールアドレスが確認用と違っていたらエラーを吐くここから
function CheckEmail(input){
  var mail = document.getElementById("email").value; //メールフォームの値を取得
  var mailConfirm = input.value; //メール確認用フォームの値を取得(引数input)
  // パスワードの一致確認
  if(mail != mailConfirm){
    input.setCustomValidity('メールアドレスが一致しません'); // エラーメッセージのセット
  }else{
    input.setCustomValidity(''); // エラーメッセージのクリア
  }
  input.reportValidity();
}

// メールアドレスが確認用と違っていたらエラーを吐くここまで


//form関連ここまで