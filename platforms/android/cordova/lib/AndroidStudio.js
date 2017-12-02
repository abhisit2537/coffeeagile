/*
 *  This is a simple routine that checks if project is an Android Studio Project
 *
 *  @param {String} root Root folder of the project
 */

<<<<<<< HEAD
/* jshint esnext: false */
=======
/*jshint esnext: false */
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2

var path = require('path');
var fs = require('fs');
var CordovaError = require('cordova-common').CordovaError;

<<<<<<< HEAD
module.exports.isAndroidStudioProject = function isAndroidStudioProject (root) {
=======
module.exports.isAndroidStudioProject = function isAndroidStudioProject(root) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
    var eclipseFiles = ['AndroidManifest.xml', 'libs', 'res', 'project.properties', 'platform_www'];
    var androidStudioFiles = ['app', 'gradle', 'app/src/main/res'];

    // assume it is an AS project and not an Eclipse project
    var isEclipse = false;
    var isAS = true;

<<<<<<< HEAD
    if (!fs.existsSync(root)) {
=======
    if(!fs.existsSync(root)) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
        throw new CordovaError('AndroidStudio.js:inAndroidStudioProject root does not exist: ' + root);
    }

    // if any of the following exists, then we are not an ASProj
<<<<<<< HEAD
    eclipseFiles.forEach(function (file) {
        if (fs.existsSync(path.join(root, file))) {
=======
    eclipseFiles.forEach(function(file) {
        if(fs.existsSync(path.join(root, file))) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
            isEclipse = true;
        }
    });

    // if it is NOT an eclipse project, check that all required files exist
<<<<<<< HEAD
    if (!isEclipse) {
        androidStudioFiles.forEach(function (file) {
            if (!fs.existsSync(path.join(root, file))) {
=======
    if(!isEclipse) {
        androidStudioFiles.forEach(function(file){
            if(!fs.existsSync(path.join(root, file))) {
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
                console.log('missing file :: ' + file);
                isAS = false;
            }
        });
    }
    return (!isEclipse && isAS);
};
