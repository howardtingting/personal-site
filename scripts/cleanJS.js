var exec = require("child_process").exec;
var glob = require("glob");
//Get .js filenames from directories under src
var getDirectories = function (src, callback) {
    glob(src + '/**/*', callback);
};
var getJSfiles = function (fileList) {
    var jsRegex = /[\/\s\S]*.js/;
    var filteredFiles = fileList.filter(function (fileName) {
        var res = fileName.match(jsRegex);
        return (res != null && res.length !== 0);
    });
    return filteredFiles;
};
var execJSfiles = function (jsFiles, cliCommand, i) {
    if (i < jsFiles.length) {
        var command_1 = cliCommand + jsFiles[i];
        exec(command_1, function (err, stdout, stderr) {
            console.log(command_1);
            execJSfiles(jsFiles, cliCommand, i + 1);
        });
    }
};
var main = function () {
    getDirectories('src', function (err, res) {
        if (err) {
            console.log('Error', err);
        }
        else {
            var jsFiles = getJSfiles(res);
            if (jsFiles) {
                var cliCommand = 'rm ./';
                //asynchronous exec
                execJSfiles(jsFiles, cliCommand, 0);
            }
        }
    });
};
main();
