$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
} catch {
    Write-Host "Sunucu baslatilamadi: $_"
    exit 1
}

Write-Host "--------------------------------------------------------"
Write-Host "KPSS Lisans Soru Bankasi Web Sunucusu Baslatildi!"
Write-Host "Yerel Erisim: http://localhost:$port"
Write-Host "--------------------------------------------------------"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".ico"  = "image/x-icon"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")
        $response.Headers.Add("Pragma", "no-cache")

        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/") { $localPath = "/index.html" }

        $filePath = Join-Path "c:\Users\Admin\Desktop\metebank" $localPath.TrimStart('/')

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            if ($mimeTypes.ContainsKey($ext)) {
                $response.ContentType = $mimeTypes[$ext]
            } else {
                $response.ContentType = "application/octet-stream"
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = "404 Not Found"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($msg)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # Ignore closed stream errors on client disconnect
    }
}
