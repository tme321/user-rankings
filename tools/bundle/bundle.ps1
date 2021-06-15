$compress = @{
  Path = ".\dist\*.*"
  CompressionLevel = "Fastest"
  DestinationPath = ".\dist\user-rankings.zip"
}
Compress-Archive @compress