CREATE TABLE listsongs (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
band VARCHAR(30) NOT NULL,
title VARCHAR(30) NOT NULL,
score int(50),
)

INSERT INTO listsongs (id, band, title, score)
VALUES (0, 'JKT48', 'HEAVY ROTATION', 0);