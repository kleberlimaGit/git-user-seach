import moment from 'moment';
import 'moment/locale/pt-br';

export function formatarData(data:string){

    return moment(data).format('L');
}