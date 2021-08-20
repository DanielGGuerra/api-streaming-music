import fs from 'fs';
import path from 'path';

export function readMusicFile(name: string) {
    const highWaterMark =  2;
    const stream = fs.createReadStream(path.join(__dirname, '..', 'music', name), { highWaterMark });

    return stream;
}