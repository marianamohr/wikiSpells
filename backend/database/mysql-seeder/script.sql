DROP DATABASE IF EXISTS wikiSpells;

CREATE DATABASE IF NOT EXISTS wikiSpells;

USE wikiSpells;

CREATE TABLE wikiSpells.casas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    casa VARCHAR(20) NOT NULL,
    fundador VARCHAR(20) NOT NULL
);

INSERT INTO
    wikiSpells.casas (casa, fundador)
VALUES (
        "Gryffindor",
        'Godric Gryffindor'
    ),
    (
        "Hufflepuff",
        'Helga Hufflepuff'
    ),
    (
        "Ravenclaw",
        'Rowena Ravenclaw'
    ),
    (
        "Slytherin",
        'Salazar Slytherin'
    );

CREATE TABLE wikiSpells.personagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    casa_id INT NOT NULL,
    FOREIGN KEY (casa_id) REFERENCES casas (id)
);

INSERT INTO
    wikiSpells.personagens (nome, casa_id)
VALUES ("Harry Potter", 1),
    ("Ron Weasley", 1),
    ("Hermione Granger", 1),
    ("Mariana Mohr", 3),
    ("Draco Malfoy", 4);

CREATE TABLE wikiSpells.feiticos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO
    wikiSpells.feiticos (nome)
VALUES ("Accio"),
    ("Imperio"),
    ("Legilimens"),
    ("Reparo"),
    ("Lumos"),
    ("Abaffiato"),
    ("Alohomora"),
    ("Obliviate"),
    ("Expelliarmus"),
    ("Expecto Patronum"),
    ("Stupefy"),
    ("Wingardium Leviosa"),
    ("Sectumsempra"),
    ("Crucio"),
    ("Aguamenti"),
    ("Rictusempra"),
    ("Finite Incantatem"),
    ("Protego");

CREATE TABLE wikiSpells.personagem_feiticos (
    personagem_id INT NOT NULL,
    feitico_id INT NOT NULL,
    data_execucao DATETIME NOT NULL,
    CONSTRAINT PRIMARY KEY (personagem_id, feitico_id),
    FOREIGN KEY (personagem_id) REFERENCES personagens (id),
    FOREIGN KEY (feitico_id) REFERENCES feiticos (id)
);

INSERT INTO
    wikiSpells.personagem_feiticos (
        personagem_id,
        feitico_id,
        data_execucao
    )
VALUES (1, 2, '1995-05-12 14:37:59'),
    (1, 1, '1996-12-12 17:37:59'),
    (2, 2, '1997-12-12 17:37:59'),
    (2, 1, '1996-10-12 12:37:59'),
    (3, 1, '2000-05-12 17:38:59'),
    (4, 2, '1992-07-12 19:37:59'),
    (3, 4, '1995-09-12 17:37:59');