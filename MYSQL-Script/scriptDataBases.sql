drop database if exists webPages;
create database webPages;
use webPages;
create table roles(idRol tinyint primary key, 
nombre varchar(30) 
) ENGINE=INNODB;

create table usuarios(idUsuario tinyint unsigned primary key, 
correo varchar(30), username varchar(40), pwd varchar(15), 
fechaAlta date, idRol tinyint, img varchar(50))ENGINE=INNODB;

create table servidor(idServer tinyint unsigned primary key, idCuenta smallint
nombre varchar(30),idEstatus tinyint)ENGINE=INNODB;

create table anime(idAnime smallint unsigned primary key, 
nombre varchar(50), descripcion varchar(150),
imagen varchar(50), idEstatus tinyint)ENGINE=INNODB;

create table temporada(idTemporada tinyint, 
idAnime smallint unsigned,
idEstatus tinyint,
primary key(idTemporada,idAnime)
)ENGINE=INNODB;

create table capitulo(idCapitulo smallint, 
idTemporada tinyint, idAnime smallint unsigned, 
titulo varchar(50), descripcion varchar(150),
primary key(idTemporada,idAnime,idCapitulo)
)ENGINE=INNODB;

create table reproductor(idAnime smallint,idCapitulo smallint ,
idTemporada tinyint, 
idServer tinyint,
url varchar(150)
)ENGINE=INNODB;

create table estatus(idEstatus tinyint primary key, nombre varchar(30));

create table cuentas(idCuenta smallint primary key, idTipocuenta tinyint , nombre varchar(30) , 
username varchar(50), pwd varchar(30), idEstatus tinyint)ENGINE=INNODB;

create table tipoCuenta(idTipocuenta tinyint PRIMARY KEY, nombreTipo VARCHAR(30))ENGINE=INNODB;

