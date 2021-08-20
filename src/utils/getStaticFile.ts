import { stat } from 'fs';
import { promisify } from 'util';
import path from 'path';

export async function getStaticMusic(name: string) {

    const statMusic = promisify(stat);

    const data = await statMusic(path.join(__dirname, '..', 'music', name));

    return data;
}