param([string] $name = $(throw "-podaj nazwe modulu"))

$parrentPath =  Get-Location
$moduleName = $name+"Module"
$path =  Join-Path -Path $parrentPath -ChildPath $moduleName
If(!(test-path $path))
{
      New-Item -ItemType Directory -Force -Path $path
}

Set-Location -Path "$path"

New-Item -ItemType Directory -Force -Path "actions"
New-Item -ItemType Directory -Force -Path "containers"
New-Item -ItemType Directory -Force -Path "sagas"
New-Item -ItemType Directory -Force -Path "components"

New-Item -Path . -Name ($name+"Reducer.js") -ItemType "file"

Set-Location -Path "$path\actions"
New-Item -Path . -Name ($name+"Actions.js") -ItemType "file"

Set-Location -Path "$path\sagas"
New-Item -Path . -Name ($name+"Saga.js") -ItemType "file"

Set-Location -Path "$parrentPath"

