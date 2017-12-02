/**
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

var fs = require('fs');
var et = require('elementtree');
<<<<<<< HEAD
var xml = require('cordova-common').xmlHelpers;
=======
var xml= require('cordova-common').xmlHelpers;
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

var DEFAULT_ORIENTATION = 'default';

/** Wraps an AndroidManifest file */
<<<<<<< HEAD
function AndroidManifest (path) {
=======
function AndroidManifest(path) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    this.path = path;
    this.doc = xml.parseElementtreeSync(path);
    if (this.doc.getroot().tag !== 'manifest') {
        throw new Error('AndroidManifest at ' + path + ' has incorrect root node name (expected "manifest")');
    }
}

<<<<<<< HEAD
AndroidManifest.prototype.getVersionName = function () {
    return this.doc.getroot().attrib['android:versionName'];
};

AndroidManifest.prototype.setVersionName = function (versionName) {
=======
AndroidManifest.prototype.getVersionName = function() {
    return this.doc.getroot().attrib['android:versionName'];
};

AndroidManifest.prototype.setVersionName = function(versionName) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    this.doc.getroot().attrib['android:versionName'] = versionName;
    return this;
};

<<<<<<< HEAD
AndroidManifest.prototype.getVersionCode = function () {
    return this.doc.getroot().attrib['android:versionCode'];
};

AndroidManifest.prototype.setVersionCode = function (versionCode) {
=======
AndroidManifest.prototype.getVersionCode = function() {
    return this.doc.getroot().attrib['android:versionCode'];
};

AndroidManifest.prototype.setVersionCode = function(versionCode) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    this.doc.getroot().attrib['android:versionCode'] = versionCode;
    return this;
};

<<<<<<< HEAD
AndroidManifest.prototype.getPackageId = function () {
    /* jshint -W069 */
    return this.doc.getroot().attrib['package'];
    /* jshint +W069 */
};

AndroidManifest.prototype.setPackageId = function (pkgId) {
    /* jshint -W069 */
    this.doc.getroot().attrib['package'] = pkgId;
    /* jshint +W069 */
    return this;
};

AndroidManifest.prototype.getActivity = function () {
=======
AndroidManifest.prototype.getPackageId = function() {
    /*jshint -W069 */
    return this.doc.getroot().attrib['package'];
    /*jshint +W069 */
};

AndroidManifest.prototype.setPackageId = function(pkgId) {
    /*jshint -W069 */
    this.doc.getroot().attrib['package'] = pkgId;
    /*jshint +W069 */
    return this;
};

AndroidManifest.prototype.getActivity = function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    var activity = this.doc.getroot().find('./application/activity');
    return {
        getName: function () {
            return activity.attrib['android:name'];
        },
        setName: function (name) {
            if (!name) {
                delete activity.attrib['android:name'];
            } else {
                activity.attrib['android:name'] = name;
            }
            return this;
        },
        getOrientation: function () {
            return activity.attrib['android:screenOrientation'];
        },
        setOrientation: function (orientation) {
            if (!orientation || orientation.toLowerCase() === DEFAULT_ORIENTATION) {
                delete activity.attrib['android:screenOrientation'];
            } else {
                activity.attrib['android:screenOrientation'] = orientation;
            }
            return this;
        },
        getLaunchMode: function () {
            return activity.attrib['android:launchMode'];
        },
        setLaunchMode: function (launchMode) {
            if (!launchMode) {
                delete activity.attrib['android:launchMode'];
            } else {
                activity.attrib['android:launchMode'] = launchMode;
            }
            return this;
        }
    };
};

<<<<<<< HEAD
['minSdkVersion', 'maxSdkVersion', 'targetSdkVersion'].forEach(function (sdkPrefName) {
    // Copy variable reference to avoid closure issues
    var prefName = sdkPrefName;

    AndroidManifest.prototype['get' + capitalize(prefName)] = function () {
=======
['minSdkVersion', 'maxSdkVersion', 'targetSdkVersion']
.forEach(function(sdkPrefName) {
    // Copy variable reference to avoid closure issues
    var prefName = sdkPrefName;

    AndroidManifest.prototype['get' + capitalize(prefName)] = function() {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        var usesSdk = this.doc.getroot().find('./uses-sdk');
        return usesSdk && usesSdk.attrib['android:' + prefName];
    };

<<<<<<< HEAD
    AndroidManifest.prototype['set' + capitalize(prefName)] = function (prefValue) {
=======
    AndroidManifest.prototype['set' + capitalize(prefName)] = function(prefValue) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        var usesSdk = this.doc.getroot().find('./uses-sdk');

        if (!usesSdk && prefValue) { // if there is no required uses-sdk element, we should create it first
            usesSdk = new et.Element('uses-sdk');
            this.doc.getroot().append(usesSdk);
        }

        if (prefValue) {
            usesSdk.attrib['android:' + prefName] = prefValue;
        }

        return this;
    };
});

<<<<<<< HEAD
AndroidManifest.prototype.getDebuggable = function () {
    return this.doc.getroot().find('./application').attrib['android:debuggable'] === 'true';
};

AndroidManifest.prototype.setDebuggable = function (value) {
=======
AndroidManifest.prototype.getDebuggable = function() {
    return this.doc.getroot().find('./application').attrib['android:debuggable'] === 'true';
};

AndroidManifest.prototype.setDebuggable = function(value) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    var application = this.doc.getroot().find('./application');
    if (value) {
        application.attrib['android:debuggable'] = 'true';
    } else {
        // The default value is "false", so we can remove attribute at all.
        delete application.attrib['android:debuggable'];
    }
    return this;
};

/**
 * Writes manifest to disk syncronously. If filename is specified, then manifest
 *   will be written to that file
 *
 * @param   {String}  [destPath]  File to write manifest to. If omitted,
 *   manifest will be written to file it has been read from.
 */
<<<<<<< HEAD
AndroidManifest.prototype.write = function (destPath) {
=======
AndroidManifest.prototype.write = function(destPath) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    fs.writeFileSync(destPath || this.path, this.doc.write({indent: 4}), 'utf-8');
};

module.exports = AndroidManifest;

function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
