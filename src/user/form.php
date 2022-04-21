<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>応募フォーム</title>
</head>

<body>
    <div>
        <h1>応募フォーム</h1>
        <form action="/admin/index.php" method="POST">
            <p> 氏名：<input type="text" name="name" required></p>
            <p> ふりがな：<input type="text" name="name_kana" required></p>
            <p>
                性別
                <input type="radio" name="sex" value="男">男
                <input type="radio" name="sex" value="女">女
                <input type="radio" name="sex" value="その他">無回答
            </p>
            <p> 生年月日：<input type="text" name="birth" required></p>
            <p> 住所：<input type="text" name="address" required></p>
            <p> メールアドレス：<input type="text" name="email" required></p>
            <p> 電話番号：<input type="text" name="phone_number" required></p>
            <p> 最終学歴：<input type="text" name="education" required></p>
            <p>
                <input type="radio" name="major" value="文系">文系
                <input type="radio" name="major" value="理系">理系
            </p>
            <p> 学部：<input type="text" name="department" required></p>
            <p> 学科：<input type="text" name="major_subject" required></p>
            <p> 自由記入欄：<input type="text" name="comments" required></p>
            <input type="submit" value="登録する">
        </form>
        <a href="./index.php">企業一覧に戻る</a>
    </div>
</body>

</html>