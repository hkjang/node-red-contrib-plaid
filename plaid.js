const os = require('os');
const fs = require('fs');
const path = require('path');
const ini = require('ini');
const plaid = require('plaid');
const plaidClient = new plaid.Client({
    clientID: readConfigureFile().PLAID_CLIENT_ID,
    secret: readConfigureFile().PLAID_SECRET,
    env: plaid.environments[readConfigureFile().PLAID_ENV]
});
function getConfigureFilePath() {
    return path.join(
        os.homedir(),
        '.plaid',
        'configure',
    );
}
function readConfigureFile() {
    const configureFile = getConfigureFilePath();
    if (!fs.existsSync(configureFile)) {
        console.error('Please check configure file (*inx : $HOME/.plaid/configure , Windows : %HOME%₩.plaid₩configure)');
        return {};
    }
    return ini.parse(fs.readFileSync(getConfigureFilePath(), 'utf-8'));
}
const linkTokenOptions = {
    user: {
        client_user_id: 'hkjang',
    },
    client_name: 'hkjang',
    products: ['auth', 'transactions'],
    country_codes: ['US'],
    language: 'en',
    webhook: 'https://sample-web-hook.com',
    account_filters: {
        depository: {
            account_subtypes: ['checking', 'savings'],
        },
    },
}
async function getLinkToken() {
    const response = await plaidClient.createLinkToken(linkTokenOptions).catch((err) => {
            // handle error
    });
    return response.link_token;
}

let public_token = "";
plaidClient.sandboxPublicTokenCreate('ins_3',['auth'],{
    webhook: 'https://sample-web-hook.com'
}, function(err, res) {
    console.log(res.public_token);
    public_token = res.public_token;
});

module.exports = function(RED) {
    "use strict";
    function plaidOut(n) {
        RED.nodes.createNode(this,n);
        var self = this;
        this.action = n.action || "";
        this.on('input', function (msg) {
            const action = self.action || msg.action;
            self.log('------public_token------');
            self.log(public_token);
            plaidClient.exchangePublicToken(public_token)
                .then(res => res.access_token)
                .then(accessToken => {
                    self.log('------accessToken------');
                    self.log(accessToken);
                    plaidClient[action](accessToken, function(err, res) {
                        self.log('------callback------');
                        self.log(res);
                        msg.payload = res;
                        self.send(msg);
                    })
                }).then(res => {
                    self.log('------res------');
                    self.log(res);
                    msg.payload = res;
                    self.send(msg);
                });
        });
    }
    RED.nodes.registerType("plaid", plaidOut);
};
