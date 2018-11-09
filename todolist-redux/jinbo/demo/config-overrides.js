const { injectBabelPlugin } = require('react-app-rewired');
const bodyParser = require('body-parser');
const path = require('path');
const modules = require('./module.json');
const pkg = require('./package.json'); 

module.exports = {
    devServer: function(configFunction) {
        return function(proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.before = (app) => {
                app.use(bodyParser.urlencoded({ extended: false }));
                app.use(bodyParser.json());
                app.use('', require('./mock'))
            };
            return config;
        }
    }
};
