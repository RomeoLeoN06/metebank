Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile('c:\Users\Admin\Desktop\metebank\MB.png')
Write-Host "Width: $($img.Width), Height: $($img.Height)"
$c1 = $img.GetPixel(0,0)
Write-Host "Pixel 0,0 - R: $($c1.R), G: $($c1.G), B: $($c1.B), A: $($c1.A)"
$img.Dispose()
