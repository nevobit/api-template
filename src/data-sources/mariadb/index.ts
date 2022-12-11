import {createPool} from 'mariadb';

export interface InitMariadbOptions {
    mariadbUrl?: string;
}

const { MARIADB_URL, MARIADB_USER, MARIADB_PASSWORD } = process.env;

export const initMariaDb = async ({ mariadbUrl }: InitMariadbOptions) : Promise<void> => {
    try{
        const config = {
            host: '192.0.2.50',
            user: MARIADB_USER,
            password: MARIADB_PASSWORD,
            database: MARIADB_URL,
            connectionLimit: 100
        }

        const connectionPool = createPool(config);
        console.info('Mssql successfully connected');

    }catch(error){
        console.info('Mariadb connection error', error)
    }
}