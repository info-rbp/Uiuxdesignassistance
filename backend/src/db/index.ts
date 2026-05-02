import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export const query = async (sql: string): Promise<any> => {
  try {
    // Escape double quotes and dollar signs for the shell
    const sanitizedSql = sql.replace(/"/g, '\\"').replace(/\$/g, '\\$');
    const { stdout } = await execPromise(`team-db "${sanitizedSql}"`);
    return JSON.parse(stdout);
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};
