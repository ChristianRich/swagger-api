# NIO API

New Insurance Offer API

## How to run
npm install -g swagger-node  
npm install -g grunt  
npm install -g mocha  
npm install -g pm2  
npm install  

Start the app:  

Development:  
`gulp`

Production or UAT:  
`pm2 start api --name NIO API`    

## Test
`mocha`

## Useful links
http://robferguson.org/2015/06/06/build-your-microservices-api-with-swagger/
https://github.com/swagger-api/swagger-node

https://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

Express 4 SSL:
http://blog.ayanray.com/2015/06/adding-https-ssl-to-express-4-x-applications/
http://www.hacksparrow.com/express-js-https.html (deprecated)

Swagger ui https fix:
https://github.com/swagger-api/swagger-ui/issues/1382

Swagger definitions (models)
https://stackoverflow.com/questions/26206685/how-can-i-describe-complex-json-model-in-swagger

Swagger build refs. Concatenates the swagger.yaml and it's references into a new file 
https://github.com/ex-nerd/swagger-example/blob/master/build-via-json-refs.js
http://azimi.me/2015/07/16/split-swagger-into-smaller-files.html

Error definition:
https://github.com/OAI/OpenAPI-Specification/blob/master/fixtures/v2.0/json/resources/resourceWithLinkedDefinitions.json#L49

Split into smaller files:
http://azimi.me/2015/07/16/split-swagger-into-smaller-files.html
https://github.com/mohsen1/multi-file-swagger-example

Swagger node:
https://github.com/swagger-api/swagger-node

