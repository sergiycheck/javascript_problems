import util from 'node:util';
const exec = util.promisify(require('node:child_process').exec);

async function runCommand(cmd: string) {
  const { stdout, stderr } = await exec(cmd);
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}

runCommand('ls');
runCommand('./test.sh arg1 arg2');
runCommand('echo "The \\$HOME variable is $HOME"');
