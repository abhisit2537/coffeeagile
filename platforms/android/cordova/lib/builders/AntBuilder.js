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
/* eslint no-unused-vars: 0 */
=======
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

var Q = require('q');
var fs = require('fs');
var path = require('path');
var util = require('util');
var shell = require('shelljs');
var spawn = require('cordova-common').superspawn.spawn;
var CordovaError = require('cordova-common').CordovaError;
var check_reqs = require('../check_reqs');

var SIGNING_PROPERTIES = '-signing.properties';
var MARKER = 'YOUR CHANGES WILL BE ERASED!';
var TEMPLATE =
    '# This file is automatically generated.\n' +
    '# Do not modify this file -- ' + MARKER + '\n';

var GenericBuilder = require('./GenericBuilder');

function AntBuilder (projectRoot) {
    GenericBuilder.call(this, projectRoot);

    this.binDirs = {ant: this.binDirs.ant};
}

util.inherits(AntBuilder, GenericBuilder);

<<<<<<< HEAD
AntBuilder.prototype.getArgs = function (cmd, opts) {
=======
AntBuilder.prototype.getArgs = function(cmd, opts) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    var args = [cmd, '-f', path.join(this.root, 'build.xml')];
    // custom_rules.xml is required for incremental builds.
    if (hasCustomRules(this.root)) {
        args.push('-Dout.dir=ant-build', '-Dgen.absolute.dir=ant-gen');
    }
<<<<<<< HEAD
    if (opts.packageInfo) {
=======
    if(opts.packageInfo) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        args.push('-propertyfile=' + path.join(this.root, opts.buildType + SIGNING_PROPERTIES));
    }
    return args;
};

<<<<<<< HEAD
AntBuilder.prototype.prepEnv = function (opts) {
    var self = this;
    return check_reqs.check_ant().then(function () {
        // Copy in build.xml on each build so that:
        // A) we don't require the Android SDK at project creation time, and
        // B) we always use the SDK's latest version of it.
        /* jshint -W069 */
        var sdkDir = process.env['ANDROID_HOME'];
        /* jshint +W069 */
        var buildTemplate = fs.readFileSync(path.join(sdkDir, 'tools', 'lib', 'build.template'), 'utf8');
        function writeBuildXml (projectPath) {
=======
AntBuilder.prototype.prepEnv = function(opts) {
    var self = this;
    return check_reqs.check_ant()
    .then(function() {
        // Copy in build.xml on each build so that:
        // A) we don't require the Android SDK at project creation time, and
        // B) we always use the SDK's latest version of it.
        /*jshint -W069 */
        var sdkDir = process.env['ANDROID_HOME'];
        /*jshint +W069 */
        var buildTemplate = fs.readFileSync(path.join(sdkDir, 'tools', 'lib', 'build.template'), 'utf8');
        function writeBuildXml(projectPath) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
            var newData = buildTemplate.replace('PROJECT_NAME', self.extractRealProjectNameFromManifest());
            fs.writeFileSync(path.join(projectPath, 'build.xml'), newData);
            if (!fs.existsSync(path.join(projectPath, 'local.properties'))) {
                fs.writeFileSync(path.join(projectPath, 'local.properties'), TEMPLATE);
            }
        }
        writeBuildXml(self.root);
        var propertiesObj = self.readProjectProperties();
        var subProjects = propertiesObj.libs;
        for (var i = 0; i < subProjects.length; ++i) {
            writeBuildXml(path.join(self.root, subProjects[i]));
        }
        if (propertiesObj.systemLibs.length > 0) {
            throw new CordovaError('Project contains at least one plugin that requires a system library. This is not supported with ANT. Use gradle instead.');
        }

        var propertiesFile = opts.buildType + SIGNING_PROPERTIES;
        var propertiesFilePath = path.join(self.root, propertiesFile);
        if (opts.packageInfo) {
            fs.writeFileSync(propertiesFilePath, TEMPLATE + opts.packageInfo.toProperties());
<<<<<<< HEAD
        } else if (isAutoGenerated(propertiesFilePath)) {
=======
        } else if(isAutoGenerated(propertiesFilePath)) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
            shell.rm('-f', propertiesFilePath);
        }
    });
};

/*
 * Builds the project with ant.
 * Returns a promise.
 */
<<<<<<< HEAD
AntBuilder.prototype.build = function (opts) {
=======
AntBuilder.prototype.build = function(opts) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    // Without our custom_rules.xml, we need to clean before building.
    var ret = Q();
    if (!hasCustomRules(this.root)) {
        // clean will call check_ant() for us.
        ret = this.clean(opts);
    }

<<<<<<< HEAD
    var args = this.getArgs(opts.buildType === 'debug' ? 'debug' : 'release', opts);
    return check_reqs.check_ant().then(function () {
        return spawn('ant', args, {stdio: 'pipe'});
    }).progress(function (stdio) {
=======
    var args = this.getArgs(opts.buildType == 'debug' ? 'debug' : 'release', opts);
    return check_reqs.check_ant()
    .then(function() {
        return spawn('ant', args, {stdio: 'pipe'});
    }).progress(function (stdio){
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        if (stdio.stderr) {
            process.stderr.write(stdio.stderr);
        } else {
            process.stdout.write(stdio.stdout);
        }
    }).catch(function (error) {
        if (error.toString().indexOf('Unable to resolve project target') >= 0) {
<<<<<<< HEAD
            return check_reqs.check_android_target(error).then(function () {
=======
            return check_reqs.check_android_target(error).then(function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
                // If due to some odd reason - check_android_target succeeds
                // we should still fail here.
                return Q.reject(error);
            });
        }
        return Q.reject(error);
    });
};

<<<<<<< HEAD
AntBuilder.prototype.clean = function (opts) {
    var args = this.getArgs('clean', opts);
    var self = this;
    return check_reqs.check_ant().then(function () {
        return spawn('ant', args, {stdio: 'inherit'});
    }).then(function () {
        shell.rm('-rf', path.join(self.root, 'out'));

        ['debug', 'release'].forEach(function (config) {
            var propertiesFilePath = path.join(self.root, config + SIGNING_PROPERTIES);
            if (isAutoGenerated(propertiesFilePath)) {
=======
AntBuilder.prototype.clean = function(opts) {
    var args = this.getArgs('clean', opts);
    var self = this;
    return check_reqs.check_ant()
    .then(function() {
        return spawn('ant', args, {stdio: 'inherit'});
    })
    .then(function () {
        shell.rm('-rf', path.join(self.root, 'out'));

        ['debug', 'release'].forEach(function(config) {
            var propertiesFilePath = path.join(self.root, config + SIGNING_PROPERTIES);
            if(isAutoGenerated(propertiesFilePath)){
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
                shell.rm('-f', propertiesFilePath);
            }
        });
    });
};

module.exports = AntBuilder;

<<<<<<< HEAD
function hasCustomRules (projectRoot) {
    return fs.existsSync(path.join(projectRoot, 'custom_rules.xml'));
}

function isAutoGenerated (file) {
=======
function hasCustomRules(projectRoot) {
    return fs.existsSync(path.join(projectRoot, 'custom_rules.xml'));
}

function isAutoGenerated(file) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    return fs.existsSync(file) && fs.readFileSync(file, 'utf8').indexOf(MARKER) > 0;
}
