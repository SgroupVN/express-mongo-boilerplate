import { createLogger, transports, format } from 'winston';

const {
    combine, timestamp,
    printf, colorize,
    json
} = format;

const winston = createLogger({
    transports: [
        new transports['Console']({
            format: combine(
                json(),
                timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
                format(info => {
                    info.level = info.level.toUpperCase();
                    return info;
                })(),
                colorize(),
                printf(log => `[${log.timestamp}] [${log.level}] ${log.message}`)
            ),
            colorize: true,
        })
    ]
});

export const logger = {
    error: msg => winston.error(msg),
    info: msg => winston.info(msg)
};
