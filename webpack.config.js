module.exports={
    mode:'development',
    entry: ['./src/jsfiles/DOMToDoCard.js','./src/jsfiles/LS.js','./src/jsfiles/DOMInput.js','./src/jsfiles/DOMStepCard.js','./src/jsfiles/DOMIndex.js'],
    output: {
        filename: 'bundle.js',
    },
    module: {  
        rules: [  
          {  
            test: /\.js$/,  
            exclude: /node_modules/,  
            use: {  
              loader: 'babel-loader',  
              options: {  
                presets: ['@babel/preset-env']  
              }  
            }  
          }  
        ]  
      } 
}