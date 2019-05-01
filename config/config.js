var config = {
    VERSION: 1,
    BUILD: 1,
    API_PATH: '/api',
    URL: 'http://localhost',
    PORT: process.env.PORT || 8080,
    //get the HTTp URL
    getHTTPUrl: function(){
        return `${this.URL}:${this.PORT}`
    },
}

module.exports = config;