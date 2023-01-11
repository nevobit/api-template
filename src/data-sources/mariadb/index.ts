import mariadb, {createPool} from 'mariadb';
import mysql from 'mysql2';

export interface InitMariadbOptions {
    mariadbUrl?: string;
}

const { MARIADB_NAME, MARIADB_PORT, MARIADB_USER, MARIADB_PASSWORD } = process.env;

export const initMariaDb = async () : Promise<void> => {
    try{
        const config = {
            host: 'apprilive-database-db00008688.mdb0002418.db1.skysql.net',
            user: MARIADB_USER || '',
            port: Number(MARIADB_PORT) || 5001,
            password: MARIADB_PASSWORD || "",
            database: MARIADB_NAME || '',
            name: MARIADB_NAME || '',
            connectionLimit: 100
        }

        const connection = mysql.createConnection(`mysql://dkn9xrprdkamw6wepkwt:pscale_pw_vciHwJXQpP5cgNaBwWYtMrrxNLkSMrCqKMLsyg4nexR@us-east.connect.psdb.cloud/aprilive-database?ssl={"rejectUnauthorized":true}`)
        // await mariadb.createConnection(`mariadb://${MARIADB_USER}:${MARIADB_PASSWORD}@apprilive-database-db00008688.mdb0002418.db1.skysql.net:5001/aprilive-database`)
        // await mariadb.createPool(config);
        console.info('Mssql successfully connected');
        // connection.end();
    }catch(error){
        console.info('Mariadb connection error', error)
    }
}