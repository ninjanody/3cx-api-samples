import {ConsoleClient, createClient} from '@3cx/api';
import {baseURL, credentials} from '../config';

async function main() {
    const http = await createClient(baseURL, credentials);
    const api = new ConsoleClient(http);

    console.log(await api.getCallLogList({
        TimeZoneName: 'Asia/Nicosia',
        callState: 'All',
        dateRangeType: 'LastNinetyDays',
        fromFilter : '',
        fromFilterType: 'Any',
        numberOfRows: 200,
        searchFilter : '',
        startRow: 0,
        toFilter: '',
        toFilterType: 'Any',
    }));
}

main();
