const { spawn } = require('child_process');
const path = require('path');

const env = {
    ...process.env,
    JAVA_HOME: 'd:\\wowo\\w1\\jdk-17.0.2',
    ANDROID_HOME: 'd:\\wowo\\w1\\android-sdk',
    PATH: `d:\\wowo\\w1\\jdk-17.0.2\\bin;d:\\wowo\\w1\\node-v24.18.0-win-x64;d:\\wowo\\w1\\android-sdk\\cmdline-tools\\latest\\bin;${process.env.PATH}`
};

const sdkmanager = path.join('d:\\wowo\\w1\\android-sdk\\cmdline-tools\\latest\\bin', 'sdkmanager.bat');

const child = spawn('cmd', ['/c', sdkmanager, '--sdk_root=d:\\wowo\\w1\\android-sdk', '--licenses'], {
    env,
    stdio: ['pipe', 'pipe', 'pipe'],
    shell: false
});

// Send "y" for each license prompt
let promptCount = 0;
child.stdout.on('data', (data) => {
    const output = data.toString();
    process.stdout.write(output);
    if (output.includes('(y/N)')) {
        promptCount++;
        console.log(`\n>>> Auto-accepting license ${promptCount}...`);
        child.stdin.write('y\n');
    }
});

child.stderr.on('data', (data) => {
    process.stderr.write(data);
});

child.on('close', (code) => {
    console.log(`\nProcess exited with code ${code}`);
    console.log(`Accepted ${promptCount} licenses`);
});