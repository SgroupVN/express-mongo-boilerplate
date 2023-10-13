import { NotFoundException } from '../system/http-exception';

export async function login() {
    throw new NotFoundException('Hello');
}
