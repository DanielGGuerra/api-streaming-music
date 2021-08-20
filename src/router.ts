import { Router } from "express";
import { getStaticMusic } from "./utils/getStaticFile";
import { readMusicFile } from "./utils/readMusicFile";

const router = Router();
/*
router.get('/api', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Server online'
    });
});*/

router.get('/api/music', async (req, res) => {
    const dataMusic = await getStaticMusic('medo.mp3');

    res.writeHead(200, {
        'Content-Type': 'audio/mpeg3',
        'Content-Length': dataMusic.size,
    });

    const streamMusic = readMusicFile('medo.mp3');

    streamMusic.on('end', () => console.log('finish'));

    streamMusic.pipe(res);
})

export default router;