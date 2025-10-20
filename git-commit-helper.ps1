# Git 한글 커밋을 위한 헬퍼 스크립트
# 사용법: .\git-commit-helper.ps1 "커밋 메시지" "추가 설명1" "추가 설명2"

param(
    [Parameter(Mandatory=$true)]
    [string]$Message,
    [string[]]$AdditionalMessages
)

$tempFile = Join-Path $env:TEMP "git-commit-msg-$(Get-Random).txt"
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

$allMessages = @($Message)
if ($AdditionalMessages) {
    $allMessages += ""  # 빈 줄 추가
    $allMessages += $AdditionalMessages
}

[System.IO.File]::WriteAllLines($tempFile, $allMessages, $utf8NoBom)

git commit -F $tempFile
Remove-Item $tempFile -ErrorAction SilentlyContinue

