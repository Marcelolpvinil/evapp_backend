import sqlite3 from "sqlite3"; 

const sqlite = sqlite3.verbose(); 

const db = new sqlite.Database("./src/database/banco.db", sqlite3.OPEN_READWRITE, (err) => { 
    if (err) {
        return console.log("Erro ao conectar ao banco: " + err.message);
    }
});

function execute(command, params, method = "all") { 
    return new Promise((resolve, reject) => {
        db[method](command, params, (error, result) => { 
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

export { db, execute };