import { MongooseAdapter } from './mongoose.adapter';

export function connectDatabase() {
    new MongooseAdapter('').connect(process.env.DATABASE_URL);
}
