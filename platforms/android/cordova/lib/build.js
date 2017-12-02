#!/usr/bin/env node

/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/

<<<<<<< HEAD
var Q = require('q');
var path = require('path');
var fs = require('fs');
var nopt = require('nopt');
=======
var Q       = require('q'),
    path    = require('path'),
    fs      = require('fs'),
    nopt = require('nopt');
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

var Adb = require('./Adb');

var builders = require('./builders/builders');
var events = require('cordova-common').events;
var spawn = require('cordova-common').superspawn.spawn;
var CordovaError = require('cordova-common').CordovaError;

<<<<<<< HEAD
function parseOpts (options, resolvedTarget, projectRoot) {
=======
function parseOpts(options, resolvedTarget, projectRoot) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    options = options || {};
    options.argv = nopt({
        gradle: Boolean,
        ant: Boolean,
        prepenv: Boolean,
        versionCode: String,
        minSdkVersion: String,
        gradleArg: [String, Array],
        keystore: path,
        alias: String,
        storePassword: String,
        password: String,
        keystoreType: String
    }, {}, options.argv, 0);

    var ret = {
        buildType: options.release ? 'release' : 'debug',
        buildMethod: process.env.ANDROID_BUILD || 'gradle',
        prepEnv: options.argv.prepenv,
        arch: resolvedTarget && resolvedTarget.arch,
        extraArgs: []
    };

<<<<<<< HEAD
    if (options.argv.ant || options.argv.gradle) { ret.buildMethod = options.argv.ant ? 'ant' : 'gradle'; }

    if (options.nobuild) ret.buildMethod = 'none';

    if (options.argv.versionCode) { ret.extraArgs.push('-PcdvVersionCode=' + options.argv.versionCode); }

    if (options.argv.minSdkVersion) { ret.extraArgs.push('-PcdvMinSdkVersion=' + options.argv.minSdkVersion); }
=======
    if (options.argv.ant || options.argv.gradle)
        ret.buildMethod = options.argv.ant ? 'ant' : 'gradle';

    if (options.nobuild) ret.buildMethod = 'none';

    if (options.argv.versionCode)
        ret.extraArgs.push('-PcdvVersionCode=' + options.argv.versionCode);

    if (options.argv.minSdkVersion)
        ret.extraArgs.push('-PcdvMinSdkVersion=' + options.argv.minSdkVersion);
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

    if (options.argv.gradleArg) {
        ret.extraArgs = ret.extraArgs.concat(options.argv.gradleArg);
    }

    var packageArgs = {};

<<<<<<< HEAD
    if (options.argv.keystore) { packageArgs.keystore = path.relative(projectRoot, path.resolve(options.argv.keystore)); }

    ['alias', 'storePassword', 'password', 'keystoreType'].forEach(function (flagName) {
        if (options.argv[flagName]) { packageArgs[flagName] = options.argv[flagName]; }
=======
    if (options.argv.keystore)
        packageArgs.keystore = path.relative(projectRoot, path.resolve(options.argv.keystore));

    ['alias','storePassword','password','keystoreType'].forEach(function (flagName) {
        if (options.argv[flagName])
            packageArgs[flagName] = options.argv[flagName];
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    });

    var buildConfig = options.buildConfig;

    // If some values are not specified as command line arguments - use build config to supplement them.
    // Command line arguemnts have precedence over build config.
    if (buildConfig) {
        if (!fs.existsSync(buildConfig)) {
            throw new Error('Specified build config file does not exist: ' + buildConfig);
        }
<<<<<<< HEAD
        events.emit('log', 'Reading build config file: ' + path.resolve(buildConfig));
=======
        events.emit('log', 'Reading build config file: '+ path.resolve(buildConfig));
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        var buildjson = fs.readFileSync(buildConfig, 'utf8');
        var config = JSON.parse(buildjson.replace(/^\ufeff/, '')); // Remove BOM
        if (config.android && config.android[ret.buildType]) {
            var androidInfo = config.android[ret.buildType];
<<<<<<< HEAD
            if (androidInfo.keystore && !packageArgs.keystore) {
                if (androidInfo.keystore.substr(0, 1) === '~') {
=======
            if(androidInfo.keystore && !packageArgs.keystore) {
                if(androidInfo.keystore.substr(0,1) === '~') {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
                    androidInfo.keystore = process.env.HOME + androidInfo.keystore.substr(1);
                }
                packageArgs.keystore = path.resolve(path.dirname(buildConfig), androidInfo.keystore);
                events.emit('log', 'Reading the keystore from: ' + packageArgs.keystore);
            }

<<<<<<< HEAD
            ['alias', 'storePassword', 'password', 'keystoreType'].forEach(function (key) {
=======
            ['alias', 'storePassword', 'password','keystoreType'].forEach(function (key){
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
                packageArgs[key] = packageArgs[key] || androidInfo[key];
            });
        }
    }

    if (packageArgs.keystore && packageArgs.alias) {
        ret.packageInfo = new PackageInfo(packageArgs.keystore, packageArgs.alias, packageArgs.storePassword,
            packageArgs.password, packageArgs.keystoreType);
    }

<<<<<<< HEAD
    if (!ret.packageInfo) {
        if (Object.keys(packageArgs).length > 0) {
=======
    if(!ret.packageInfo) {
        if(Object.keys(packageArgs).length > 0) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
            events.emit('warn', '\'keystore\' and \'alias\' need to be specified to generate a signed archive.');
        }
    }

    return ret;
}

/*
 * Builds the project with the specifed options
 * Returns a promise.
 */
<<<<<<< HEAD
module.exports.runClean = function (options) {
    var opts = parseOpts(options, null, this.root);
    var builder = builders.getBuilder(opts.buildMethod);
    return builder.prepEnv(opts).then(function () {
=======
module.exports.runClean = function(options) {
    var opts = parseOpts(options, null, this.root);
    var builder = builders.getBuilder(opts.buildMethod);
    return builder.prepEnv(opts)
    .then(function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        return builder.clean(opts);
    });
};

/**
 * Builds the project with the specifed options.
 *
 * @param   {BuildOptions}  options      A set of options. See PlatformApi.build
 *   method documentation for reference.
 * @param   {Object}  optResolvedTarget  A deployment target. Used to pass
 *   target architecture from upstream 'run' call. TODO: remove this option in
 *   favor of setting buildOptions.archs field.
 *
 * @return  {Promise<Object>}            Promise, resolved with built packages
 *   information.
 */
<<<<<<< HEAD
module.exports.run = function (options, optResolvedTarget) {
    var opts = parseOpts(options, optResolvedTarget, this.root);
    var builder = builders.getBuilder(opts.buildMethod);
    return builder.prepEnv(opts).then(function () {
=======
module.exports.run = function(options, optResolvedTarget) {
    var opts = parseOpts(options, optResolvedTarget, this.root);
    var builder = builders.getBuilder(opts.buildMethod);
    return builder.prepEnv(opts)
    .then(function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        if (opts.prepEnv) {
            events.emit('verbose', 'Build file successfully prepared.');
            return;
        }
<<<<<<< HEAD
        return builder.build(opts).then(function () {
=======
        return builder.build(opts)
        .then(function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
            var apkPaths = builder.findOutputApks(opts.buildType, opts.arch);
            events.emit('log', 'Built the following apk(s): \n\t' + apkPaths.join('\n\t'));
            return {
                apkPaths: apkPaths,
                buildType: opts.buildType,
                buildMethod: opts.buildMethod
            };
        });
    });
};

/*
 * Detects the architecture of a device/emulator
 * Returns "arm" or "x86".
 */
<<<<<<< HEAD
module.exports.detectArchitecture = function (target) {
    function helper () {
        return Adb.shell(target, 'cat /proc/cpuinfo').then(function (output) {
=======
module.exports.detectArchitecture = function(target) {
    function helper() {
        return Adb.shell(target, 'cat /proc/cpuinfo')
        .then(function(output) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
            return /intel/i.exec(output) ? 'x86' : 'arm';
        });
    }
    // It sometimes happens (at least on OS X), that this command will hang forever.
    // To fix it, either unplug & replug device, or restart adb server.
<<<<<<< HEAD
    return helper().timeout(1000, new CordovaError('Device communication timed out. Try unplugging & replugging the device.')).then(null, function (err) {
=======
    return helper()
    .timeout(1000, new CordovaError('Device communication timed out. Try unplugging & replugging the device.'))
    .then(null, function(err) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        if (/timed out/.exec('' + err)) {
            // adb kill-server doesn't seem to do the trick.
            // Could probably find a x-platform version of killall, but I'm not actually
            // sure that this scenario even happens on non-OSX machines.
            events.emit('verbose', 'adb timed out while detecting device/emulator architecture. Killing adb and trying again.');
<<<<<<< HEAD
            return spawn('killall', ['adb']).then(function () {
                return helper().then(null, function () {
                    // The double kill is sadly often necessary, at least on mac.
                    events.emit('warn', 'adb timed out a second time while detecting device/emulator architecture. Killing adb and trying again.');
                    return spawn('killall', ['adb']).then(function () {
                        return helper().then(null, function () {
=======
            return spawn('killall', ['adb'])
            .then(function() {
                return helper()
                .then(null, function() {
                    // The double kill is sadly often necessary, at least on mac.
                    events.emit('warn', 'adb timed out a second time while detecting device/emulator architecture. Killing adb and trying again.');
                    return spawn('killall', ['adb'])
                    .then(function() {
                        return helper()
                        .then(null, function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
                            return Q.reject(new CordovaError('adb timed out a third time while detecting device/emulator architecture. Try unplugging & replugging the device.'));
                        });
                    });
                });
<<<<<<< HEAD
            }, function () {
=======
            }, function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
                // For non-killall OS's.
                return Q.reject(err);
            });
        }
        throw err;
    });
};

<<<<<<< HEAD
module.exports.findBestApkForArchitecture = function (buildResults, arch) {
    var paths = buildResults.apkPaths.filter(function (p) {
        var apkName = path.basename(p);
        if (buildResults.buildType === 'debug') {
=======
module.exports.findBestApkForArchitecture = function(buildResults, arch) {
    var paths = buildResults.apkPaths.filter(function(p) {
        var apkName = path.basename(p);
        if (buildResults.buildType == 'debug') {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
            return /-debug/.exec(apkName);
        }
        return !/-debug/.exec(apkName);
    });
    var archPattern = new RegExp('-' + arch);
    var hasArchPattern = /-x86|-arm/;
    for (var i = 0; i < paths.length; ++i) {
        var apkName = path.basename(paths[i]);
        if (hasArchPattern.exec(apkName)) {
            if (archPattern.exec(apkName)) {
                return paths[i];
            }
        } else {
            return paths[i];
        }
    }
    throw new Error('Could not find apk architecture: ' + arch + ' build-type: ' + buildResults.buildType);
};

<<<<<<< HEAD
function PackageInfo (keystore, alias, storePassword, password, keystoreType) {
=======
function PackageInfo(keystore, alias, storePassword, password, keystoreType) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    this.keystore = {
        'name': 'key.store',
        'value': keystore
    };
    this.alias = {
        'name': 'key.alias',
        'value': alias
    };
    if (storePassword) {
        this.storePassword = {
            'name': 'key.store.password',
            'value': storePassword
        };
    }
    if (password) {
        this.password = {
            'name': 'key.alias.password',
            'value': password
        };
    }
    if (keystoreType) {
        this.keystoreType = {
            'name': 'key.store.type',
            'value': keystoreType
        };
    }
}

PackageInfo.prototype = {
<<<<<<< HEAD
    toProperties: function () {
        var self = this;
        var result = '';
        Object.keys(self).forEach(function (key) {
=======
    toProperties: function() {
        var self = this;
        var result = '';
        Object.keys(self).forEach(function(key) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
            result += self[key].name;
            result += '=';
            result += self[key].value.replace(/\\/g, '\\\\');
            result += '\n';
        });
        return result;
    }
};

<<<<<<< HEAD
module.exports.help = function () {
=======
module.exports.help = function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    console.log('Usage: ' + path.relative(process.cwd(), path.join('../build')) + ' [flags] [Signed APK flags]');
    console.log('Flags:');
    console.log('    \'--debug\': will build project in debug mode (default)');
    console.log('    \'--release\': will build project for release');
    console.log('    \'--ant\': will build project with ant');
    console.log('    \'--gradle\': will build project with gradle (default)');
    console.log('    \'--nobuild\': will skip build process (useful when using run command)');
    console.log('    \'--prepenv\': don\'t build, but copy in build scripts where necessary');
    console.log('    \'--versionCode=#\': Override versionCode for this build. Useful for uploading multiple APKs. Requires --gradle.');
    console.log('    \'--minSdkVersion=#\': Override minSdkVersion for this build. Useful for uploading multiple APKs. Requires --gradle.');
    console.log('    \'--gradleArg=<gradle command line arg>\': Extra args to pass to the gradle command. Use one flag per arg. Ex. --gradleArg=-PcdvBuildMultipleApks=true');
    console.log('');
    console.log('Signed APK flags (overwrites debug/release-signing.proprties) :');
    console.log('    \'--keystore=<path to keystore>\': Key store used to build a signed archive. (Required)');
    console.log('    \'--alias=\': Alias for the key store. (Required)');
    console.log('    \'--storePassword=\': Password for the key store. (Optional - prompted)');
    console.log('    \'--password=\': Password for the key. (Optional - prompted)');
    console.log('    \'--keystoreType\': Type of the keystore. (Optional)');
    process.exit(0);
};
