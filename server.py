#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import http.server
import socketserver
import mimetypes
import os

class UTF8HTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 为所有文本文件添加UTF-8编码
        if self.headers.get('Content-Type'):
            content_type = self.headers.get('Content-Type')
            if content_type.startswith('text/') or content_type in ['application/javascript', 'application/json']:
                if 'charset' not in content_type:
                    self.send_header('Content-Type', content_type + '; charset=utf-8')
        super().end_headers()
    
    def guess_type(self, path):
        """Guess the type of a file."""
        mimetype, encoding = mimetypes.guess_type(path)
        
        # 为JavaScript文件设置正确的MIME类型和编码
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        elif path.endswith('.html'):
            return 'text/html; charset=utf-8'
        elif path.endswith('.css'):
            return 'text/css; charset=utf-8'
        elif mimetype and mimetype.startswith('text/'):
            return mimetype + '; charset=utf-8'
        
        return mimetype

if __name__ == "__main__":
    PORT = 8000
    
    # 设置MIME类型
    mimetypes.add_type('application/javascript', '.js')
    
    with socketserver.TCPServer(("", PORT), UTF8HTTPRequestHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")