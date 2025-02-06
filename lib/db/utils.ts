import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import readline from 'node:readline';

export const execAsync = promisify(exec);

export function question(query: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) =>
        rl.question(query, (ans) => {
            rl.close();
            resolve(ans);
        })
    );
} 