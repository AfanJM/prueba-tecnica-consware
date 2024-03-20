import 'dotenv/config';

import env from 'env-var'


export const envs = {

    PORT: env.get('port').required().asPortNumber(),
    MONGO_URL:env.get('mongo_url').required(),
    DBNAME: env.get('dbname').required(),

}