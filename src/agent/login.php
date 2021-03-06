<?php
session_start();
require('../dbconnect.php');

if (!empty($_POST)) {
    $login = $db->prepare('SELECT * FROM agents WHERE email=? AND password=?');
    $login->execute(array(
        $_POST['email'],
        sha1($_POST['password'])
    ));
    $user = $login->fetch();

    if ($user) {
        $_SESSION = array();
        $_SESSION['agent_id'] = $user['id'];
        $_SESSION['time'] = time();
        header('Location: http://' . $_SERVER['HTTP_HOST'] . '/agent/index.php');
        exit();
    } else {
        $error = 'fail';
    }
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../user/style.css">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>企業ログイン</title>
</head>

<body>
    <header class="boozer-login-icon">
        <div class="icon">
            <img src="../user/_header phpに入れてる.png" alt="">
        </div>
    </header>
    <main>
        <div class="text-center">
            <h1 class="text-2xl font-bold mt-4 mb-4 sm:text-4xl">企業ログイン</h1>
        </div>
        <form class="width-full flex p-4 justify-center" action="/agent/login.php" method="POST">
            <div>
                <input class="block border-2 my-3 rounded mb-7" type="email" name="email" size="20" placeholder="メールアドレス" required>
                <input class="block border-2 my-3 rounded mb-7" type="password" size="20" placeholder="パスワード" required name="password">
                <input class="block my-0 mx-auto mt-4 py-3 rounded" type="submit" value="ログイン">
            </div>
        </form>
        <div class="text-center">
            <a href="./password_reset/show_request_form.php" class="text-xs">パスワードを忘れた方へ</a>
        </div>
        <div class="text-center m-10">
            <a class="newAgent_input_button" href="./new_agent_apply/newAgentform.php">お申し込み</a>
            <p class="text-xs m-5">新たに自社情報の掲載を希望される方は"お申し込みボタン"から登録をお願いいたします。</p>
        </div>
    </main>
</body>

</html>