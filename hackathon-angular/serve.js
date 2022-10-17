const apimock = require('@ng-apimock/core');
const express = require('express');
const app = express();
app.set('port', 9999);

apimock.processor.process({
    src: 'mocks', 
    patterns: { 
        mocks: '**/*Mock.json',
        presets: '**/*Preset.json',
    },
    watches: {
        mocks: '**/*.json',
        presets: '**/*.json'
    },
    watch: true
});

app.use(apimock.middleware);

app.listen(app.get('port'), () => {
    console.log('@ng-apimock/core running on port', app.get('port'));
});