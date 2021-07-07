param([string] $name = $(throw "-podaj nazwe komponentu"), [string] $modulePath = $(throw "-podaj sciezke modulu"))

$parrentPath =  Get-Location

Set-Location -Path "$parrentPath\$modulePath\components"
New-Item -Path . -Name ("$name.js") -ItemType "file"
New-Item -Path . -Name ("$name.scss") -ItemType "file"

Set-Location -Path "$parrentPath\$modulePath\containers"
New-Item -Path . -Name ("$name"+"Container.js") -ItemType "file"