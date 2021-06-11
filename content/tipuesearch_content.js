var tipuesearch = {"pages": [{'title': 'Topics', 'text': '', 'tags': '', 'url': 'Topics.html'}, {'title': 'W1', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '建立倉儲\xa0 https://github.com/40923108/wcm2021 \n cmsimde\xa0 https://40923108.github.io/wcm2021/content/index.html \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': 'http://mde.tw/cmstemplate \n mdecourse 作為協同者之後: \n git clone --recurse-submodules  https://github.com/40923108/wcm2021.git  08 \n cd 08 \n cd cmsimde \n git checkout 1c3aeec \n 然後 acp "add w3 page" \n', 'tags': '', 'url': 'W3.html'}, {'title': 'WCM倉儲', 'text': '搜尋 \xa0 fossil scm \xa0接著 Download \n \n 注意： 須將此檔案存在y槽 \n \n 建立一個資料夾為 \xa0 fossil \n 接這輸入 : \xa0 fossil clone https://學號@fossil.kmol.info/u/學號 學號.fossil \n \n y槽/tmp/fossil 會出現 \xa0 學號.fossil \n \n 需要再建立一個 wd 的資料夾 \n 在wd底下再建立一個 自己學號 的資料夾 \n 為了開啟檔案輸入： fossil open ./../../學號.fossil \n 是為了跟遠端連接有一個壓縮檔案紀錄版本 \n \n y槽/tmp/fossil/wd/學號資料夾 會出現 _FOSSIL_ \n \n 註：出現<unnamed>原因是沒在WCM測試倉儲中更改名稱 \n \n \n \n \n 接著在 wd 的目錄下 clone github 帳號 \n 輸入指令： git clone --recurse-submodules https://github.com/學號/倉儲名稱.git \n \n 接著把整個 wcm2021 內的資料全部複製到 學號資料夾 內 \n 注意： 須注意是否有重疊檔案，避免被覆改掉 \n 為了新增所有資料 \n cd 學號 \n fossil add . \n \n 註： 假如中間改版有刪除檔案或目錄，需改成\xa0 fossil addremove \n fossil add .\xa0 是沒有刪除資料所需要打的 \n fossil commit -m "initial add" \xa0 提交資料 \n a \xa0 為全部推送 \n \n \n 完成同步 \n', 'tags': '', 'url': 'WCM倉儲.html'}, {'title': 'SSH設定', 'text': '設定SSH \n \n 產生Key用puttygen.exe \n 設session用putty \n 按Generate後滑鼠在視窗上隨意跑動 \n \n 複製至Github \n \n 新增新的SSH KEY \n \n 貼上剛剛所複製的 再按 Add SSH key \n 註:Title多半用自己學號 \n \n 注意:需存成ppk類型需存成ppk類型 \n 接著換設定P接著換設定 putty.exe \n \n \n 用自己網路 Proxy type 要用None \n 若用學校網路則Proxy type:HTTP\xa0➨Proxy hostname:[2001:288:6004:17::69]\xa0➨Port:3128 \n 接著按SSH\xa0➨Auth\xa0➨Browse新增設定的Private key\xa0 \n 須注意它的位置在哪個磁碟 點選錯誤會導致無法推送 \n \n 設定好後須回Session按 save \n 將config將config拉到白窗 \n 註:config 在.git 內 \n \n 新增第二行url將第一行的url 加個# \n \n 新增新的一行plink \n 即可push \n', 'tags': '', 'url': 'SSH設定.html'}, {'title': 'Heroku', 'text': '重啟小黑窗 \n 打cd tmp \n cd 08(倉儲名稱) \n heroku login-1 \n 接著打上herohu帳號密碼 \n heroku login -a a40923108(名稱) \n 最後git push heoku \n \n \n \n \n \n', 'tags': '', 'url': 'Heroku.html'}, {'title': 'Robodk', 'text': '先到a.kmol.info:88下載\xa0 robodk522_portable \n \n 開啟此檔後>點bin>RoboDK.exe \n \n 接著點選文件>打開>examples>pick_and_place>選取所有檔案後按 開啟 \n \n 會出現此畫面 \n \n 註:按+ -號可以更改坐標系的大小 \n 在編輯器中輸入  pip install robodk \n \n 把 pip_and_place.py拉至白窗>tools>go \n 機械手臂即可運作。 \n', 'tags': '', 'url': 'Robodk.html'}, {'title': 'OBS+Youtube', 'text': '\n \n 按進行直播 即可開始 \n 但是首次直播者，需先手機號碼認證，24小時後完成驗證才可開始直播。 \n \n', 'tags': '', 'url': 'OBS+Youtube.html'}, {'title': '問題', 'text': '', 'tags': '', 'url': '問題.html'}, {'title': 'Python', 'text': '在要進入python時進入不了 \n \n 解決方式 \n 只要在cmsimde裡多localhost.crt和 localhost.key \n', 'tags': '', 'url': 'Python.html'}, {'title': 'PUSH', 'text': "在推送時出現此段文字  \n unable to access 'https://github.com/40923108/wcm2021.git/': Failed to connect to 2001:288:6004:17::69 port 3128: Network unreachable \n \n 解決方法\xa0 \n 發現在自己電腦推送，沒有改Proxy，只要在.gitconfig裡的proxy加上#即可。 \n 註:.gitconfig在home裡 \n \n \n", 'tags': '', 'url': 'PUSH.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': '更新', 'text': 'cd tmp \n cd 08 \n cd cmsimde \n git pull origin master \n 即可完成 \n', 'tags': '', 'url': '更新.html'}, {'title': 'fossil靜態網頁', 'text': '搜尋： https://fossil.kmol.info/u/學號/doc/trunk/index.html \n 改版方式 cms', 'tags': '', 'url': 'fossil靜態網頁.html'}, {'title': '分組', 'text': '', 'tags': '', 'url': '分組.html'}, {'title': '教室排課表', 'text': '電腦輔助設計室排課表 \n import requests\nimport bs4\n# for os.environ and os.system\nimport os\n# for geting html file path\nimport pathlib\n  \n# for pythn 3.9\nproxy = \'http://[2001:288:6004:17::69]:3128\'\n  \nos.environ[\'http_proxy\'] = proxy \nos.environ[\'HTTP_PROXY\'] = proxy\nos.environ[\'https_proxy\'] = proxy\nos.environ[\'HTTPS_PROXY\'] = proxy\n  \n\'\'\'\nurl:  \'jclassroom_ajax.php\',\ndata: { pselyr: pselyr, pselclssroom: pselclssroom },\n\'\'\'\nsemester = \'1092\'\nclassroomno = \'BGA0710\'\ncolumn = True\n  \nif semester == None:\n    semester = \'1092\'\nif classroomno == None:\n    # BGA0810 電腦輔助設計室\n    classroomno = \'BGA0710\'\n      \nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n  \nurl = \'https://qry.nfu.edu.tw/jclassroom_ajax.php\'\npost_var = {\'pselyr\': semester, \'pselclssroom\': classroomno}\n  \nresult = requests.post(url, data = post_var, headers = headers)\n  \nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\n  \n# 先除掉所有 anchor\nfor a in soup.findAll(\'a\'):\n    # bs3 語法\n    #a.replaceWithChildren()\n    # bs4 語法, 將標註與內容拆開\n    a.unwrap()\n  \n# 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\n  \n# 重建 table, 設定邊線為 1 pixel\noutput = "<table border=\'1\'>"\n  \nfor i in table.contents:\n    # 利用 replace 復原  \n    output += str(i).replace("\xa0", " ")\noutput += "</table>"\n#print(output)\n  \n# 將 output 寫入 w1_classroom.html\nfileName = "w1_classroom.html"\nwith open(fileName, "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\" + fileName) \n \n 每一間都有屬於自己的教室編碼 \n 要在classroomno 打出相對的教室編碼 \n 即能查出課表 \n', 'tags': '', 'url': '教室排課表.html'}, {'title': '分組連結', 'text': 'wcm2021-ag1 \n 組長 \n 40923135 web \xa0|\xa0 40923135 repo \n 組員 \n 40923101 web \xa0|\xa0 40923101 repo \n 40923108 web \xa0|\xa0 40923108 repo \n 40923142 web \xa0|\xa0 40923142 repo \n 分組網站 \n ag1 web \xa0|\xa0 ag1 repo \n wcm2021分組超文件處理程式： \n # wcm2021_gen_html.py\nstudList = "wcm2021_list.txt"\ncourTitle = "wcm2021"\n\n# group title initial\ngrpTitle = studList[:6] + "-" + studList[7] + "g"\n\n# student Account and github Account as inputs\ndef perWeb(s, g):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + courTitle + "\\">" + s + " web</a>"\n    print(pSite)\n\ndef perRepo(s, g):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + courTitle + "\\">" + s + " repo</a>"\n    print(pSite)\n    \ndef grpWeb(s, g, ord):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + grpTitle + str(ord) + "\\">grp web</a>"\n    print(pSite)\n    \ndef grpRepo(s, g, ord):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + grpTitle + str(ord) + "\\">grp repo</a>"\n    print(pSite)\n\n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open(studList) as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n\ngrpCount = 0\nfor i in range(len(data)):\n    # grpCount is the group order\n    grpCount = grpCount + 1\n    group = data[i].rstrip("\\n").split("\\t")\n    # use filter to remove vacant string element\n    # use [1:] to remove first element\n    group = list(filter(None, group))[1:]\n    print(grpTitle + str(grpCount) + "<br />")\n    for j in range(0, len(group), 2):\n        # s is the student number\n        s = group[j]\n        # g is the github account\n        g = group[j+1]\n        perWeb(s, g)\n        print("|")\n        perRepo(s, g)\n        print("|")\n        grpWeb(s, g, grpCount)\n        print("|")\n        grpRepo(s, g, grpCount)\n        print("<br />") \n', 'tags': '', 'url': '分組連結.html'}]};