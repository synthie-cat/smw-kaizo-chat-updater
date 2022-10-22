'use strict';

const
    https = require('https'),
    fs = require('fs'),

    nodeHtmlParser = require('node-html-parser')
;

async function getRomhackInfo_Async(romhackName)
{
    try {
        romhackName = getParsedRomhackName(romhackName);
        let html = await getHtml_Async(romhackName);
        let info = getRomhackInfo_FromHtml(html);

        return info;
    } catch (e) {
        return {
            error: {
                type: 'request-error',
                message: e.message,
            },
        };
    }
}
exports.getRomhackInfo_Async = getRomhackInfo_Async;


function getHtml_Async(romhackName)
{
    return new Promise((resolve, reject) => {
        let body = '';
        var r = https.request({
            host: 'www.smwcentral.net',
            port: '443',
            path: encodeURI('/?p=section&s=smwhacks&f[name]=' + romhackName),
            method: 'GET',
            headers: {},
                }, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                body += chunk;
            });
            res.on('end', () => {
                resolve(body);
            })
        });
        r.on('error', (err) => {
            reject('RequestError: ' + err.message);
        });
        r.end();
    });
}


function getParsedRomhackName(romhackName_Raw)
{
    romhackName_Raw = romhackName_Raw.toLowerCase();

    let letters_Allowed = '1234567890' + 
            'qwertyuiop' + 
            'asdfghjkl' +
            'zxcvbnm' +
            ' ';
        
    let romhackName_Parsed = '';
    for (let i = 0; i < romhackName_Raw.length; i++) {
        if (letters_Allowed.indexOf(romhackName_Raw[i]) === -1)
            continue;

        romhackName_Parsed += romhackName_Raw[i];
    }

    return romhackName_Parsed;
}


function getRomhackInfo_FromHtml(html)
{
    let root = nodeHtmlParser.parse(html);

    let table = root.querySelector('.list');
    let tbody = table.querySelector('tbody');
    let trs = tbody.querySelectorAll('tr');
    if (trs.length > 1) {
        return {
            error: {
                type: 'multiple-results',
            },
        };
    }

    if (trs.length === 0) {
        return {
            error: {
                type: 'no-results',
            },
        };
    }

    let tds = trs[0].querySelectorAll('td');
    
    return {
        error: null,

        name: tds[0].querySelector('a').innerHTML,
        exits: tds[3].innerHTML,
        type: tds[4].innerHTML,
        author: tds[5].querySelector('a').innerHTML,
    };
}