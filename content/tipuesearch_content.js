var tipuesearch = {"pages": [{'title': 'Topics', 'text': '', 'tags': '', 'url': 'Topics.html'}, {'title': 'W1', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '建立倉儲\xa0 https://github.com/40923108/wcm2021 \n cmsimde\xa0 https://40923108.github.io/wcm2021/content/index.html \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': 'http://mde.tw/cmstemplate \n mdecourse 作為協同者之後: \n git clone --recurse-submodules  https://github.com/40923108/wcm2021.git  08 \n cd 08 \n cd cmsimde \n git checkout 1c3aeec \n 然後 acp "add w3 page" \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '設定SSH \n \n 產生Key用puttygen.exe \n 設session用putty \n \n 按Generate後滑鼠在視窗上隨意跑動 \n \n 複製至Github \n \n 新增新的SSH KEY \n \n 貼上剛剛所複製的 再按 Add SSH key \n 註:Title多半用自己學號 \n \n 注意:需存成ppk類型需存成ppk類型 \n 接著換設定P接著換設定 putty.exe \n \n \n 用自己網路 Proxy type 要用None \n 若用學校網路則Proxy type:HTTP\xa0➨Proxy hostname:[2001:288:6004:17::69]\xa0➨Port:3128 \n 接著按SSH\xa0➨Auth\xa0➨Browse新增設定的Private key\xa0 \n 須注意它的位置在哪個磁碟 點選錯誤會導致無法推送 \n \n 設定好後須回Session按 save \n 將config將config拉到白窗 \n 註:config 在.git 內 \n \n 新增第二行url將第一行的url 加個# \n \n 新增新的一行plink \n 即可push', 'tags': '', 'url': 'W5.html'}, {'title': '問題', 'text': '', 'tags': '', 'url': '問題.html'}, {'title': 'Python', 'text': '在要進入python時進入不了 \n \n 解決方式 \n 只要在cmsimde裡多localhost.crt和 localhost.key \n', 'tags': '', 'url': 'Python.html'}, {'title': 'PUSH', 'text': "在推送時出現此段文字  \n unable to access 'https://github.com/40923108/wcm2021.git/': Failed to connect to 2001:288:6004:17::69 port 3128: Network unreachable \n \n 解決方法\xa0 \n 發現在自己電腦推送，沒有改Proxy，只要在.gitconfig裡的proxy加上#即可。 \n 註:.gitconfig在home裡 \n SSH\n 設定SSH \n \n 產生Key用puttygen.exe \n 設session用putty \n \n \n", 'tags': '', 'url': 'PUSH.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': '推送', 'text': '\n', 'tags': '', 'url': '推送.html'}]};