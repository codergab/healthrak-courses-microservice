import { exec } from 'child_process';

type SuccessCommand = {
  message: string;
  data: object | string;
  status: boolean;
};

interface FailedCommand<T> {
  message: string;
  error: T;
  status: boolean;
}

export const runCommand = async (command: string, cb: Function) => {
  exec(command, (error: any, stdout: any, stderr: any) => {
    if (error || stderr) {
      const commandResponse: FailedCommand<Error> = {
        message: 'Cannot Seed Command',
        error,
        status: false,
      };
      return cb(commandResponse);
    }

    const commandResponse: SuccessCommand = {
      message: 'Successfully Seeded',
      data: stdout,
      status: true,
    };

    return cb(commandResponse);
  });
};
