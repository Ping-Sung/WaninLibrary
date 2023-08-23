2020 拾本書堂
====================
## 主題 ： **網銀基金會產學合作案**

### 團隊成員 ###
* 鄭秉松
* 賴潔瑩
* 張竣傑

# 環境安裝 (不要安裝低於以下版本，且建議由上往下安裝)
* Apache        v2.4.38
* PHP           v7.3.1
* MySQL         v8.0.14
* Composer      v1.8.0
* Laravel       v7.6.2 (本專案使用，無須特別安裝)
* Node.js       v12.16.2
* NPM           v6.9.0
* Git           v2.13.2
* wkhtmltox     v0.12.5-1.msvc2015-win64 (列印條碼)
### 如果您的電腦環境版本低於以上版本，但依舊可以跑此專案的話就不用特別重新安裝 ###



# 如何使用 
## 下載此專案到本機端 (通常只需做一次，就是第一次將檔案下載到本機端時)
1. 請先切換到伺服器資料夾，例如www
>       cd C:\AppServ\www
2. 新增資料夾，名稱為WaninLibary (您也可以不用指令來新增)
>       mkdir WaninLibary
3. 透過網址來進行下載專案到您的本機端 *(git clone <伺服器網址> <本機端檔案路徑>)*
>       git clone https://thisjack@bitbucket.org/thisjack/waninlibary.git WaninLibary
### **注意：下載好後，還不能馬上執行專案哦，要先下載、安裝與設定好相關環境才行。**
4. 切換目錄到專案根目錄
>       cd C:\AppServ\www\WaninLibary
5. 安裝相關依賴套件 (最自動讀取composer.json檔案來安裝所需套件，最終會生成vendor資料夾出來)
>       composer install
6. 複製環境檔案 (需自行輸入資料庫帳號密碼與相關設定，基於安全問題請詢問後端人員)
>       copy .env.example .env
7. 重新生產安全Key (通常到這步驟就可以瀏覽網頁了)
>       php artisan key:generate
### *網頁請瀏覽 http://localhost/WaninLibary/public/* ###
8. 最後npm也要安裝相關依賴套件 (如果要開發前端相關css、js必要安裝)
>       npm install
npm安裝完成就大功告成了！

## 上傳此專案版本 (將您的本機端版本上載至Bitbucket)
1. 請先切換到專案資料夾
>       cd C:\AppServ\www\WaninLibary
2. 透過以下指令即可 *(git push -u <數據庫名稱> <分支名稱>)*
>       git push -u origin master

## 更新此專案版本 (更新您本地端專案版本，來跟Bitbucket端版本一樣)
1. 請先切換到專案資料夾
>       cd C:\AppServ\www\WaninLibary
2. 透過以下指令即可 *(git pull <數據庫名稱> <分支名稱>)*
>       git pull origin master

