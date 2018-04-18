create database workshop1;

\c workshop1

create role workshopper with login;

create table theworkshops (
	firstname text,
	lastname text,
	workshops text
	
);

grant select, insert on theworkshops to workshopper;


insert into theworkshops (attendee, workshops)  VALUES
('Ahmed Abdelali','React'),
('Ann Frank','Mongo'),
('Ann Mulkern','Workshop1'),
('Clara Weick','WebSever');


