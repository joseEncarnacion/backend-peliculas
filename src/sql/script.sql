CREATE DATABASE peliculas;


CREATE TABLE movies(
    id SERIAL not null primary key,
    titulo varchar(500) not null, 
    genero varchar(200), 
    fecha_estreno varchar(250),
    foto varchar(3500)
);

INSERT INTO movies (titulo, genero, fecha_estreno, foto) values ('Spider-Man: No Way Home', 'ciencia fision', '17/12/2021', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/34Ks9lSiOAPpW13tb0m4PMUkVYc.jpg' )
;

CREATE TABLE actores(
    id SERIAL not null primary key,
    nombre_actor varchar(200) not null,
    fecha_nacimiento varchar(500),
    sexo varchar(200),
    foto varchar(5000),
    movies_id varchar,
    fecha DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_movies FOREIGN KEY(movies_id) REFERENCES movies(titulo)
);



INSERT into actores(nombre_actor, fecha_nacimiento, sexo, foto, movies_id ) 
    values ('Tom Holland', '1996-06-01', 'Masculino', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2qhIDp44cAqP2clOgt2afQI07X8.jpg', 'Spider-Man: No Way Home');



ALTER TABLE actores 
    drop  CONSTRAINT fk_movies;


ALTER TABLE actores 
    ADD CONSTRAINT fk_movies FOREIGN KEY(movies_id) REFERENCES movies(titulo);

ALTER table movies
    add UNIQUE(titulo);



ALTER TABLE actores
ALTER COLUMN movies_id SET DATA TYPE VARCHAR(5000);



