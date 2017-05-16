var sql = require('mssql');
//2.
function ServerConfig() {
	this.config = {
	    server: '16ca77ec-0db7-49c9-9a4e-a76e004f83ba.sqlserver.sequelizer.com',
	    database: 'db16ca77ec0db749c99a4ea76e004f83ba',
	    user: 'qkwqusghrdrduzpt',
	    password: 'P5GEhuqf6mWfnvTq7JqqQ5ry38i8q67TPn6rEnEsgVRK4jeuxyknNtfSLiKhmrW8',
	    port: 1433
	};
	this.amqpURL = 'amqp://imtqjgzz:LQWyhmVxKBMgV6ROObew36G07DUs6ZYZ@white-mynah-bird.rmq.cloudamqp.com/imtqjgzz';
}

module.exports = new ServerConfig();