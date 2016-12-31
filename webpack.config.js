const path = require('path')


module.exports = {

	resolve: {

	    alias     : {
	      // action
	      actions     : path.resolve(__dirname, 'src/actions'),
	    }
  	},
	module  : {
		loaders   : [
			{ 
        test    : /\.js$/,
        exclude : 'node_modules',
        loader  : 'babel'
		  },
		]
	},
	babel: {
      compact: false
    }
}