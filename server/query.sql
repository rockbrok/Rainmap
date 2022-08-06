CREATE TABLE users (
    id INT PRIMARY KEY  NOT NULL,
    username TEXT NOT NULL,
    hash TEXT NOT NULL
)

CREATE TABLE file_info (
    id INT PRIMARY KEY  NOT NULL,
    owner_id INTEGER NOT NULL,
    filename TEXT NOT NULL,
    creation_date TEXT NOT NULL,
    FOREIGN KEY (owner_id)
        REFERENCES users(id)
)

.schema

SELECT * FROM users;