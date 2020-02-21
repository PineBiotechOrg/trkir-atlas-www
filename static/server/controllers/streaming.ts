import {NextFunction, Request as ERequest, Response as EResponse} from 'express';

import {api} from 'client/utils/transport';

export default async function streaming(req: ERequest, res: EResponse, _: NextFunction) {
    try {
        const response: Response = await api.customRequest('https://storage.yandexcloud.net/trkir-test/7/1582016662.6286201.mp4', 'GET');
        // Не может прочитать тут
        const buffers = await response.arrayBuffer();
        const fileSize = buffers.byteLength;
        // const range = req.headers.range;

        // if (range) {
        //     const parts = range.replace(/bytes=/, "").split("-");
        //     const start = parseInt(parts[0], 10);
        //     const end = parts[1]
        //         ? parseInt(parts[1], 10)
        //         : fileSize - 1;
        //     const chunksize = (end - start) + 1;
        //     const file = buffers.slice(start, end);
        //     const head = {
        //         'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        //         'Accept-Ranges': 'bytes',
        //         'Content-Length': chunksize,
        //         'Content-Type': 'video/mp4',
        //     };
        //     res.writeHead(206, head);
        //     res.send(file);
        // } else {
        //     const headers = {
        //         'Content-Length': fileSize,
        //         'Content-Type': 'video/mp4',
        //     };
        //     res.writeHead(200, headers);
        //     res.send(buffers);
        // }

        const headers = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, headers);
        res.send(buffers);
    } catch (e) {
        res.send('bad');
    }
}
