DROP DATABASE IF EXISTS userlist1;
CREATE DATABASE userlist1;

\c userlist1;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password_digest VARCHAR
  
);

CREATE TABLE listings (
    ID SERIAL PRIMARY KEY,
    address TEXT,
    description TEXT,
    rent MONEY,
    subsidy TEXT,
    bedrooms INTEGER,
    picture TEXT,
    title TEXT
);

INSERT INTO listings (address,description,rent,subsidy,bedrooms,picture,title)
    VALUES('145 Bush', 'small apartments', 1515, 'NYCHA', 2,'https://imgs.6sqft.com/wp-content/uploads/2014/11/21020805/modern-midtown-apartment151.jpg', 'NYCHA'),
    ('161 Jamaica', 'cozy studios', 1200, 'Section 8', 0,'https://ds2.cityrealty.com/img/fe6cc2860932d81f1bd3d8670ae02dcf03542b32++424+0+60/the-cherokee-517-east-77th-street-00.jpg','Seaview');


INSERT INTO users (username, password_digest)
  VALUES ('Tyler', 'password'), ('Shannon', 'password1'), ('Richard', 'password2');
