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
    ('161 Jamaica', 'cozy studios', 1200, 'Section 8', 0,'https://ds2.cityrealty.com/img/fe6cc2860932d81f1bd3d8670ae02dcf03542b32++424+0+60/the-cherokee-517-east-77th-street-00.jpg','Seaview'),
    ('454 police ave','cute studio apartment',1200,'SEPS',0,'https://www.nyhabitat.com/picture-ny-apt/12454/12454D17.jpg','The Place'),
    ('98 Dean st','Sleak 2 bedroom with backyard apartment',1515,'CityFEPS',2,'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg','Sturdy Moves');

INSERT INTO users (username, password_digest)
  VALUES ('Tyler', 'password'), ('Shannon', 'password1'), ('Richard', 'password2');
