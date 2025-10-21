# Git 한글 인코딩 환경 체크 스크립트
# 사용법: .\check-git-encoding.ps1

Write-Host "=== Git 한글 인코딩 환경 체크 ===" -ForegroundColor Cyan
Write-Host ""

# 1. 현재 터미널 확인
Write-Host "[1] 현재 터미널 종류:" -ForegroundColor Yellow
if ($PSVersionTable) {
    Write-Host "  → PowerShell $($PSVersionTable.PSVersion)" -ForegroundColor White
    Write-Host "  ⚠️  PowerShell에서는 반드시 'git commit -F 파일' 방식 사용!" -ForegroundColor Red
} else {
    Write-Host "  → 알 수 없는 셸" -ForegroundColor White
}
Write-Host ""

# 2. 코드 페이지 확인
Write-Host "[2] 코드 페이지:" -ForegroundColor Yellow
$codePage = chcp
Write-Host "  → $codePage" -ForegroundColor White
if ($codePage -match "65001") {
    Write-Host "  ✅ UTF-8 설정 정상!" -ForegroundColor Green
} else {
    Write-Host "  ❌ UTF-8이 아님! 'chcp 65001' 실행 필요" -ForegroundColor Red
}
Write-Host ""

# 3. 환경 변수 확인
Write-Host "[3] 환경 변수:" -ForegroundColor Yellow
$langOk = $false
$lcAllOk = $false

if ($env:LANG) {
    Write-Host "  → LANG = $env:LANG" -ForegroundColor White
    if ($env:LANG -match "UTF-8") { $langOk = $true }
} else {
    Write-Host "  → LANG = (설정 안됨)" -ForegroundColor Red
}

if ($env:LC_ALL) {
    Write-Host "  → LC_ALL = $env:LC_ALL" -ForegroundColor White
    if ($env:LC_ALL -match "UTF-8") { $lcAllOk = $true }
} else {
    Write-Host "  → LC_ALL = (설정 안됨)" -ForegroundColor Red
}

if ($langOk -and $lcAllOk) {
    Write-Host "  ✅ 환경 변수 정상!" -ForegroundColor Green
} else {
    Write-Host "  ❌ 환경 변수 설정 필요! PowerShell 프로필 확인 필요" -ForegroundColor Red
}
Write-Host ""

# 4. Git 설정 확인
Write-Host "[4] Git 인코딩 설정:" -ForegroundColor Yellow
$commitEnc = git config --get i18n.commitencoding
$logEnc = git config --get i18n.logoutputencoding
$quotepath = git config --get core.quotepath

Write-Host "  → i18n.commitencoding = $commitEnc" -ForegroundColor White
Write-Host "  → i18n.logoutputencoding = $logEnc" -ForegroundColor White
Write-Host "  → core.quotepath = $quotepath" -ForegroundColor White

$gitOk = ($commitEnc -eq "utf-8") -and ($logEnc -eq "utf-8") -and ($quotepath -eq "false")
if ($gitOk) {
    Write-Host "  ✅ Git 설정 정상!" -ForegroundColor Green
} else {
    Write-Host "  ❌ Git 설정 확인 필요!" -ForegroundColor Red
}
Write-Host ""

# 5. 최근 커밋 확인
Write-Host "[5] 최근 커밋 메시지:" -ForegroundColor Yellow
$lastCommit = git log -1 --format="%s" 2>$null
if ($lastCommit) {
    Write-Host "  → $lastCommit" -ForegroundColor White
    
    # 한글이 깨졌는지 간단히 체크 (물음표나 ?가 많으면 깨진 것)
    if ($lastCommit -match '\?{3,}') {
        Write-Host "  ❌ 한글이 깨진 것 같습니다!" -ForegroundColor Red
    } else {
        Write-Host "  ✅ 정상적으로 보입니다!" -ForegroundColor Green
    }
} else {
    Write-Host "  → 커밋 없음" -ForegroundColor Gray
}
Write-Host ""

# 6. 종합 판정
Write-Host "=== 종합 결과 ===" -ForegroundColor Cyan
$allOk = ($codePage -match "65001") -and $langOk -and $lcAllOk -and $gitOk

if ($allOk) {
    Write-Host "✅ 모든 설정이 정상입니다!" -ForegroundColor Green
    Write-Host ""
    Write-Host "💡 권장 커밋 방법:" -ForegroundColor Yellow
    Write-Host "  1. Git Bash 터미널로 변경 후: git commit -m ""한글 메시지""" -ForegroundColor White
    Write-Host "  2. PowerShell에서: git commit -F .git/COMMIT_MSG_TEMP" -ForegroundColor White
} else {
    Write-Host "⚠️  일부 설정에 문제가 있습니다!" -ForegroundColor Red
    Write-Host ""
    Write-Host "🔧 해결 방법:" -ForegroundColor Yellow
    Write-Host "  1. PowerShell 프로필 다시 로드: . `$PROFILE" -ForegroundColor White
    Write-Host "  2. 또는 PowerShell 재시작" -ForegroundColor White
    Write-Host "  3. 또는 Git Bash 터미널 사용" -ForegroundColor White
}
Write-Host ""
Write-Host "📚 자세한 내용은 GIT-KOREAN-WHY-BREAKS.md 파일을 참고하세요!" -ForegroundColor Cyan

