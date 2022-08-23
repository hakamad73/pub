
##popopopopo
sudo apt update
sudo apt install npm

git clone https://github.com/hakamad73/pub

cd /pub
npm install

sudo apt install mysql-server
sudo mysql -u root -p

#----mysql----
create database test;
use test;
CREATE TABLE items(
     id INT(11) AUTO_INCREMENT NOT NULL,
     name VARCHAR(30) NOT NULL ,
     PRIMARY KEY (id));

INSERT items(name) VALUES ('じゃがいも');
INSERT items(name) VALUES ('にんじん');
INSERT items(name) VALUES ('たまねぎ');

create user 'ubuntu'@'localhost' identified with mysql_native_password by 'password';
GRANT ALL ON test.* TO 'ubuntu'@'localhost';
#--------------


##Gitへの認証

git remote set-url origin https://github.com/hakamad73/pub.git/
