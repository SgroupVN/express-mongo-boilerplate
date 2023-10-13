import { HttpException } from '../http-exception/HttpException';

export function httpHandler(err, req, res, next) {
    if (err instanceof HttpException) {
        return res.status(err.status).json({
            code: err.code,
            message: err.message
        });
    }

    if (err instanceof Error) {
        return res.status(500).json({
            code: err.code,
            message: err.message
        });
    }

    return next();
}
