const { exec } = require("child_process");
const glob = require("glob");
//Get .js filenames from directories under src


const getDirectories: (...args) => void = function(src: string, callback: (...args) => void) {
  glob(src + '/**/*', callback);
}

const getJSfiles: (fileList: Array<string>) => Array<string> = (fileList) => {
  const jsRegex = /[\/\s\S]*.js/;
  const filteredFiles = fileList.filter(function(fileName) {
    const res = fileName.match(jsRegex);
    return (res != null && res.length !== 0);
  });
  return filteredFiles;
}

const execJSfiles: (jsFiles: Array<string>, cliCommand: string, i: number) => void = (jsFiles, cliCommand, i) => {
  if (i < jsFiles.length) {
    const command = cliCommand + jsFiles[i]
    exec(command, (err, stdout, stderr) => {
      console.log(command);
      execJSfiles(jsFiles, cliCommand, i+1);
    });
  }
}

const main: () => void = function() {
  getDirectories('src', function (err, res) {
    if (err) {
      console.log('Error', err);
    } else {
      const jsFiles: Array<string> = getJSfiles(res as string[]);
      if (jsFiles) {
        const cliCommand = 'rm ./';
        //asynchronous exec
        execJSfiles(jsFiles, cliCommand, 0);
      }
    }
  });
}

main();
