/* Lógico_1: */

CREATE TABLE RESERVA (
    ID_reserva int PRIMARY KEY,
    Data Date,
    Horario Date
);

CREATE TABLE SITE (
);

CREATE TABLE PASSAGEM (
    ID_passagem int PRIMARY KEY,
    Numero int
);

CREATE TABLE CLIENTE (
    CPF int PRIMARY KEY,
    Nome String,
    Email String,
    Telefone String
);