from http.server import BaseHTTPRequestHandler, HTTPServer
import os
import cgi
import json


def run_model(image_path):
    # Example function to run model on image
    # Replace this with your actual function
    # This function should return some result based on the image
    # For demonstration, let's just return a placeholder result
    return {"image_path": image_path, "result": "Some result for " + image_path}


class ImageHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            # Parse the form data
            form = cgi.FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={'REQUEST_METHOD': 'POST'}
            )

            # Check if the file was uploaded
            if 'file' not in form:
                self.send_error(400, 'No file was uploaded')
                return
            inp_path = 'src/server/inputs'
            # Get the file data
            file_item = form['file']
            print(file_item.filename)
            # Check if the file was uploaded
            # Create the inp_path folder if it doesn't exist
            if not os.path.exists(inp_path):
                os.makedirs(inp_path)

                # Save the file to the inp_path folder
            filepath = os.path.join(inp_path, file_item.filename)
            with open(filepath, 'wb') as f:
                f.write(file_item.file.read())
            # Run model on the uploaded image
            result = run_model(filepath)

            # Send response with CORS headers
            self.send_response(200)
            self.send_cors_headers()
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode())
        except Exception as e:
            self.send_error(500, str(e))

    def do_GET(self):
        self.send_response(200)
        self.send_cors_headers()
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b'''
            <html>
            <head><title>Upload Image</title></head>
            <body>
            <h1>Upload Image</h1>
            <form action="/" method="post" enctype="multipart/form-data">
            <input type="file" name="file">
            <input type="submit" value="Upload">
            </form>
            </body>
            </html>
        ''')

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_cors_headers()
        self.end_headers()

    def send_cors_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET')
        self.send_header('Access-Control-Allow-Headers', 'Content-type')


def run(server_class=HTTPServer, handler_class=ImageHandler, port=4437):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on localhost:{port}...')
    httpd.serve_forever()


if __name__ == '__main__':
    run()
