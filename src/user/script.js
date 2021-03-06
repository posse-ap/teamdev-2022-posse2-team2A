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





//form関連ここから
// 「入力内容を確認する」ボタンを押したらformの入力値を保存するここから
function toCheck(){
  var formElements = document.forms.inputForm; //form.phpのform全体を取得
  var firstName = formElements.first_name.value;
  var lastName = formElements.last_name.value;
  var firstNameKana= formElements.first_name_kana.value;
  var lastNameKana= formElements.last_name_kana.value;
  var birthYear = formElements.birth_year.value;
  var birthMonth = formElements.birth_month.value;
  var birthDay = formElements.birth_day.value;
  var sex = formElements.sex.value;
  var email = formElements.email_check.value;
  var addressPost = formElements.address_postal.value;
  var addressPref = formElements.address_prefecture.value;
  var addressMnic = formElements.address_municipalities.value;
  var addressNumber = formElements.address_number.value;
  var addressBuild = formElements.address_building.value;
  var phoneNumber = formElements.phone_number.value;
  var education = formElements.education.value;
  var major = formElements.major.value;
  var majorDepart = formElements.major_department.value;
  var majorSubject = formElements.major_subject.value;
  var graduationYear = formElements.graduation_year.value;
  var graduationStatus = formElements.graduation_status.value;
  var comments = formElements.comments.value;
}


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


// 画像のプレビューここから
function previewFile(hoge){
  var fileData = new FileReader();
  fileData.onload = (function() {
      //id属性が付与されているimgタグのsrc属性に、fileReaderで取得した値の結果を入力することで
      //プレビュー表示している
      document.getElementById('preview').src = fileData.result;
  });
  fileData.readAsDataURL(hoge.files[0]);
}

// 画像のプレビューここまで