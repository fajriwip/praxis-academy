user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git init
Reinitialized existing Git repository in C:/Users/user/Documents/GitHub/rhymes/.git/

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ touch readme.txt

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git add readme.txt

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git commit -m "first commit"
[master 1edf838] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 readme.txt

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ echo "this repo is a collection of my favorite nursery thymes" >> readme.txt

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git diff
warning: LF will be replaced by CRLF in readme.txt.
The file will have its original line endings in your working directory
diff --git a/readme.txt b/readme.txt
index e69de29..7a1a04b 100644
--- a/readme.txt
+++ b/readme.txt
@@ -0,0 +1 @@
+this repo is a collection of my favorite nursery thymes

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git add readme.txt
warning: LF will be replaced by CRLF in readme.txt.
The file will have its original line endings in your working directory

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git commit -m "added project overview to readme.txt"
[master ab84aa9] added project overview to readme.txt
 1 file changed, 1 insertion(+)

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ wget https://github.com/bryanhirsch/rhymes/blob/master/all-around-the-mulberry-bush.txt
--2019-10-08 15:48:34--  https://github.com/bryanhirsch/rhymes/blob/master/all-around-the-mulberry-bush.txt
Resolving github.com (github.com)... 13.229.188.59
Connecting to github.com (github.com)|13.229.188.59|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'all-around-the-mulberry-bush.txt'

     0K .......... .......... .......... .......... ..........  232K
    50K .......... .......                                     3,74M=0,2s

2019-10-08 15:48:35 (305 KB/s) - 'all-around-the-mulberry-bush.txt' saved [68688]


user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ wget https://github.com/bryanhirsch/rhymes/blob/master/hickory-dickory-dock.txt
--2019-10-08 15:48:50--  https://github.com/bryanhirsch/rhymes/blob/master/hickory-dickory-dock.txt
Resolving github.com (github.com)... 13.250.177.223
Connecting to github.com (github.com)|13.250.177.223|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'hickory-dickory-dock.txt'

     0K .......... .......... .......... .......... ..........  648K
    50K .......... ....                                        91,1K=0,2s

2019-10-08 15:48:51 (276 KB/s) - 'hickory-dickory-dock.txt' saved [65709]


user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ wget https://github.com/bryanhirsch/rhymes/blob/master/hokey-pokey.txt
--2019-10-08 15:49:01--  https://github.com/bryanhirsch/rhymes/blob/master/hokey-pokey.txt
Resolving github.com (github.com)... 13.250.177.223
Connecting to github.com (github.com)|13.250.177.223|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'hokey-pokey.txt'

     0K .......... .......... .......... .......... ..........  195K
    50K .......... ......                                      2,71M=0,3s

2019-10-08 15:49:02 (253 KB/s) - 'hokey-pokey.txt' saved [67758]


user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ wget https://github.com/bryanhirsch/rhymes/blob/master/jack-and-jill.txt
--2019-10-08 15:49:17--  https://github.com/bryanhirsch/rhymes/blob/master/jack-and-jill.txt
Resolving github.com (github.com)... 13.250.177.223
Connecting to github.com (github.com)|13.250.177.223|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'jack-and-jill.txt'

     0K .......... .......... .......... .......... ..........  213K
    50K .......... .....                                       1,57M=0,2s

2019-10-08 15:49:19 (268 KB/s) - 'jack-and-jill.txt' saved [66931]


user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ wget https://github.com/bryanhirsch/rhymes/blob/master/old-mother-hubbard.txt
--2019-10-08 15:49:28--  https://github.com/bryanhirsch/rhymes/blob/master/old-mother-hubbard.txt
Resolving github.com (github.com)... 13.250.177.223
Connecting to github.com (github.com)|13.250.177.223|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'old-mother-hubbard.txt'

     0K .......... .......... .......... .......... ..........  484K
    50K .......... .........                                    150K=0,2s

2019-10-08 15:49:29 (297 KB/s) - 'old-mother-hubbard.txt' saved [71449]


user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ wget https://github.com/bryanhirsch/rhymes/blob/master/roses-are-red.txt
--2019-10-08 15:49:43--  https://github.com/bryanhirsch/rhymes/blob/master/roses-are-red.txt
Resolving github.com (github.com)... 13.250.177.223
Connecting to github.com (github.com)|13.250.177.223|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'roses-are-red.txt'

     0K .......... .......... .......... .......... ..........  105K
    50K .......... ....                                        3,78M=0,5s

2019-10-08 15:49:45 (135 KB/s) - 'roses-are-red.txt' saved [66094]


user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ wget https://github.com/bryanhirsch/rhymes/blob/master/twinkle-twinkle.txt
--2019-10-08 15:49:55--  https://github.com/bryanhirsch/rhymes/blob/master/twinkle-twinkle.txt
Resolving github.com (github.com)... 13.250.177.223
Connecting to github.com (github.com)|13.250.177.223|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'twinkle-twinkle.txt'

     0K .......... .......... .......... .......... ..........  202K
    50K .......... ....                                        6,02M=0,3s

2019-10-08 15:49:56 (257 KB/s) - 'twinkle-twinkle.txt' saved [65946]

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git add .
warning: LF will be replaced by CRLF in all-around-the-mulberry-bush.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in hickory-dickory-dock.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in hokey-pokey.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in jack-and-jill.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in old-mother-hubbard.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in roses-are-red.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in twinkle-twinkle.txt.
The file will have its original line endings in your working directory

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git commit -m "all"
[master c0e6626] all
 7 files changed, 6455 insertions(+)
 create mode 100644 all-around-the-mulberry-bush.txt
 create mode 100644 hickory-dickory-dock.txt
 create mode 100644 hokey-pokey.txt
 create mode 100644 jack-and-jill.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 roses-are-red.txt
 create mode 100644 twinkle-twinkle.txt

 user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git remote add origin https://github.com/fajriwip/rhymes.git

user@DESKTOP-BE5ENV2 MINGW64 ~/Documents/GitHub/rhymes (master)
$ git push -u origin master
Logon failed, use ctrl+c to cancel basic credential prompt.
remote: Repository not found.
fatal: repository 'https://github.com/fajriwip/rhymes.git/' not found