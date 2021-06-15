#./resources/bin/mkcert-v1.4.3-windows-amd64.exe -install -cert-file cert.pem -key-file key.pem localhost
#cat cert.pem, key.pem > node_modules/webpack-dev-server/ssl/server.pem
#rm cert.pem, key.pem
./resources/bin/mkcert.exe -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem "localhost"
