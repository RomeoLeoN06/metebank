Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Force -Path 'c:\Users\Admin\Desktop\metebank\icons' | Out-Null

function GenerateIcon($size, $filename) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    
    # Background fill
    $rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, [System.Drawing.Color]::FromArgb(255, 11, 15, 25), [System.Drawing.Color]::FromArgb(255, 99, 102, 241), 45)
    $g.FillRectangle($brush, $rect)
    
    # Inner glowing circle
    $cSize = [int]($size * 0.75)
    $cOffset = [int](($size - $cSize) / 2)
    $cBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
    $g.FillEllipse($cBrush, $cOffset, $cOffset, $cSize, $cSize)
    
    # Text
    $fontSize = [int]($size * 0.22)
    $font = New-Object System.Drawing.Font('Arial', $fontSize, [System.Drawing.FontStyle]::Bold)
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rectF = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
    $g.DrawString("KPSS", $font, [System.Drawing.Brushes]::White, $rectF, $sf)
    
    $bmp.Save($filename, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

GenerateIcon 192 'c:\Users\Admin\Desktop\metebank\icons\icon-192.png'
GenerateIcon 512 'c:\Users\Admin\Desktop\metebank\icons\icon-512.png'
Write-Host "Icons successfully generated!"
