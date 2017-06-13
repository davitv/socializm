install:
	npm install

run_dev_server:
	./node_modules/http-server/bin/http-server -p 3000 . --cors=http://localhost:3000

webpack_dev_server:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors --content-base ./ --port 8080 --hot

build_production_js:
	./node_modules/webpack/bin/webpack.js --optimize-minimize --env.NODE_ENV=production