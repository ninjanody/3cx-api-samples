import {createClient, ConsoleClient} from '@3cx/api';
import {baseURL, credentials} from '../config';

async function main(){
    const http = await createClient(baseURL, credentials);
    const api = new ConsoleClient(http);

    console.log(await api.getSystemStatus());
}

main();
