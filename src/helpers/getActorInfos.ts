import { formatDate } from './formatDate';
import { CastMember } from '@/movie';

export function getActorInfos(actor: CastMember) {
    return [
        {
            id: '01',
            prop: 'Nome',
            propValue: actor.name,
        },
        {
            id: '02',
            prop: 'Data de nascimento',
            propValue: formatDate(actor.dateOfBirth),
        },
        {
            id: '03',
            prop: 'Local de nascimento',
            propValue: actor.placeOfBirth,
        },
        {
            id: '04',
            prop: 'Gênero',
            propValue: actor.gender,
        },
    ];
}
