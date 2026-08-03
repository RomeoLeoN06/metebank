Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Admin\Downloads\MB.png"
if (-not (Test-Path $srcPath)) {
    $srcPath = "c:\Users\Admin\Desktop\metebank\MB.png"
}

$orig = [System.Drawing.Bitmap]::FromFile($srcPath)
$width = $orig.Width
$height = $orig.Height

$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($orig, 0, 0, $width, $height)
$g.Dispose()
$orig.Dispose()

# Convert dark background pixels to transparent
for ($x = 0; $x -lt $width; $x++) {
    for ($y = 0; $y -lt $height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        # Check if dark background
        if ($pixel.R -lt 30 -and $pixel.G -lt 30 -and $pixel.B -lt 35) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$out1 = "c:\Users\Admin\Desktop\metebank\MB.png"
$out2 = "c:\Users\Admin\Desktop\metebank\icons\MB.png"

$bmp.Save($out1, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save($out2, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Successfully processed transparent MB.png!"
