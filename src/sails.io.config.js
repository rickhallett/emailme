/* global io */

if (io && io.sails) {
    io.sails.autoConnect = false; // don't manage socket connection automatically
    io.sails.environment = 'production'; // don't spam the browser console
}