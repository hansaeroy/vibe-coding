# Git 한글 커밋 완벽 가이드

## 🎯 해결 완료!

이 프로젝트에서 Git 한글 커밋이 제대로 작동하도록 모든 설정이 완료되었습니다.

## ✅ 적용된 설정

### 1. Git 전역 설정
```bash
core.quotepath=false                # 한글 파일명 표시
core.precomposeunicode=true        # 유니코드 정규화
core.pager=less -r                 # 한글 출력 개선
i18n.commitencoding=utf-8          # 커밋 인코딩
i18n.logoutputencoding=utf-8       # 로그 출력 인코딩
gui.encoding=utf-8                 # GUI 인코딩
svn.pathnameencoding=utf-8         # 경로명 인코딩
```

### 2. 프로젝트 로컬 설정
- `.git/config`에 UTF-8 인코딩 설정 추가
- `.vscode/settings.json`에 Git Bash 기본 터미널 설정
- `.editorconfig`에 프로젝트 인코딩 명시
- `.gitattributes`에 줄바꿈 설정

### 3. PowerShell 프로필 설정
위치: `C:\Users\han\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`

```powershell
# UTF-8 인코딩 설정
chcp 65001 > $null
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

# PowerShell UTF-8 출력 설정
$OutputEncoding = [System.Text.Encoding]::UTF8
$PSDefaultParameterValues['*:Encoding'] = 'utf8'

# Git 한글 지원을 위한 환경 변수
$env:LESSCHARSET = 'utf-8'
$env:LC_ALL = 'ko_KR.UTF-8'
$env:LANG = 'ko_KR.UTF-8'
```

## 📝 한글 커밋 방법

### ⭐ 방법 1: UTF-8 파일 사용 (권장)

이 방법이 **100% 확실하게 작동**합니다!

```powershell
# 1. 커밋 메시지를 파일에 작성
# .git/COMMIT_MSG_TEMP 파일을 만들고 한글 메시지 작성

# 2. 파일로부터 커밋
git commit -F .git/COMMIT_MSG_TEMP
```

**실제 사용 예시:**
```powershell
# 변경사항 스테이징
git add .

# 커밋 메시지 파일 작성 (VS Code나 메모장으로 작성)
# .git/COMMIT_MSG_TEMP 파일에 다음과 같이 작성:
# 
# feat: 새로운 기능 추가
# 
# - 기능 1 구현
# - 기능 2 구현

# 커밋 실행
git commit -F .git/COMMIT_MSG_TEMP
```

### 방법 2: Git Bash 사용

VS Code/Cursor에서 터미널을 Git Bash로 변경하면 일반적인 방법으로 커밋 가능:

```bash
git commit -m "한글 커밋 메시지"
```

### 방법 3: PowerShell 헬퍼 스크립트 (현재 문제 있음)

`git-commit-helper.ps1` 스크립트가 있지만, PowerShell의 인코딩 한계로 완벽하지 않습니다.
**방법 1이나 2를 사용하세요.**

## 🔍 확인 방법

커밋 후 한글이 제대로 저장되었는지 확인:

```bash
# 최근 커밋 확인
git log -1

# 최근 5개 커밋 간단히 보기
git log --oneline -5

# 커밋 객체 직접 확인
git cat-file -p HEAD
```

## ⚠️ 중요 사항

1. **이전 커밋**들은 이미 잘못된 인코딩으로 저장되어 있어 깨져 보입니다.
2. **지금부터 작성하는 모든 커밋**은 한글이 정상적으로 표시됩니다.
3. **PowerShell**에서 `git commit -m "한글"`은 여전히 문제가 있을 수 있습니다.
   - 파일 방식(`-F` 옵션) 사용을 권장합니다.
4. **Git Bash**를 사용하면 문제없이 작동합니다.

## 🎉 테스트 결과

```bash
$ git log --oneline -2
b0a176e 문서: Git 한글 커밋 가이드 추가
7711581 설정: UTF-8 인코딩 설정 추가 및 README 한글 설명 추가
```

✅ 완벽하게 한글이 표시됩니다!

## 💡 추가 팁

### VS Code/Cursor 터미널 변경
1. 터미널 창에서 드롭다운 클릭
2. "Select Default Profile" 선택
3. "Git Bash" 선택

또는 `Ctrl + Shift + P` → "Terminal: Select Default Profile" → "Git Bash"

### Git GUI 도구 사용
완전히 편하게 사용하려면:
- **GitHub Desktop**
- **SourceTree**
- **GitKraken**

등의 GUI 도구를 사용하면 한글 문제가 전혀 없습니다.

## 📚 참고

- 모든 파일은 UTF-8 인코딩으로 저장됩니다.
- `.editorconfig`가 프로젝트 인코딩을 관리합니다.
- `.gitattributes`가 줄바꿈 처리를 담당합니다.

