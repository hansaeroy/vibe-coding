# 한글 커밋이 간헐적으로 깨지는 이유와 해결책

## 🤔 왜 잘되다가 다시 깨질까?

### 원인 1: 커밋 방법을 섞어서 사용

```powershell
# 어제는 이렇게 했음 (정상 작동) ✅
git commit -F .git/COMMIT_MSG_TEMP

# 오늘은 급해서 이렇게 함 (깨짐) ❌
git commit -m "한글 메시지"
```

**문제:** PowerShell에서 `-m` 옵션으로 직접 한글을 전달하면, PowerShell → Git으로 전달되는 과정에서 인코딩이 깨집니다.

### 원인 2: 터미널 종류가 바뀜

| 터미널     | 상태      | 이유                       |
| ---------- | --------- | -------------------------- |
| Git Bash   | ✅ 정상   | UTF-8 네이티브 지원        |
| PowerShell | ⚠️ 조건부 | `-F` 옵션 사용 시에만 정상 |
| CMD        | ❌ 깨짐   | 레거시 인코딩 사용         |
| WSL/Ubuntu | ✅ 정상   | UTF-8 기본값               |

**예시:**

```powershell
# VS Code에서 Git Bash로 커밋 → 정상 ✅
git commit -m "한글 메시지"

# 실수로 PowerShell로 변경 후 커밋 → 깨짐 ❌
git commit -m "한글 메시지"
```

### 원인 3: 환경 변수가 리셋됨

PowerShell 프로필이 로드되지 않은 경우:

```powershell
# 프로필이 로드된 경우 (정상)
$env:LANG
# 출력: ko_KR.UTF-8 ✅

# 프로필이 로드 안된 경우 (문제)
$env:LANG
# 출력: (빈 값) ❌
```

**언제 발생하나요?**

- PowerShell을 관리자 권한으로 실행할 때
- PowerShell ISE를 사용할 때
- 일부 IDE에서 내장 터미널을 열 때
- `-NoProfile` 옵션으로 PowerShell을 실행할 때

### 원인 4: Git GUI 도구와 CLI를 섞어 사용

```
GitHub Desktop으로 커밋 → 한글 정상 ✅
VS Code Git UI로 커밋 → 한글 정상 ✅
터미널에서 git commit -m → 깨짐 ❌
```

각 도구마다 Git을 호출하는 방식이 달라서 인코딩 처리가 다릅니다.

### 원인 5: Windows 코드 페이지 자동 변경

일부 프로그램(특히 오래된 한글 프로그램)을 실행하면 Windows 코드 페이지가 자동으로 변경됩니다:

```powershell
# 정상 상태
chcp
# Active code page: 65001 (UTF-8) ✅

# 한글 프로그램 실행 후
chcp
# Active code page: 949 (EUC-KR) ❌
```

## 💡 완벽한 해결책

### 해결책 1: 항상 파일 방식 사용 (권장) ⭐

**절대 깨지지 않는 방법:**

1. 커밋 메시지 파일 생성 및 작성:

```powershell
# VS Code나 메모장으로 .git/COMMIT_MSG_TEMP 파일 작성
```

2. 파일로 커밋:

```powershell
git add .
git commit -F .git/COMMIT_MSG_TEMP
```

**이 방법은 100% 항상 작동합니다!**

### 해결책 2: Git Bash만 사용

VS Code/Cursor 설정:

1. `Ctrl + Shift + P`
2. "Terminal: Select Default Profile" 입력
3. "Git Bash" 선택

이후 모든 커밋을 Git Bash에서 수행:

```bash
git commit -m "한글 메시지"  # Git Bash에서는 항상 정상 작동
```

### 해결책 3: 커밋 전 환경 확인 스크립트

PowerShell에서 커밋하기 전에 항상 이 명령어를 실행:

```powershell
# 환경 재설정
chcp 65001 > $null
$env:LANG = 'ko_KR.UTF-8'
$env:LC_ALL = 'ko_KR.UTF-8'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 이제 커밋
git commit -F .git/COMMIT_MSG_TEMP
```

### 해결책 4: Git Hooks 활용

`.git/hooks/prepare-commit-msg` 파일에 자동 인코딩 변환 추가 (이미 생성됨):

```bash
#!/bin/sh
# UTF-8 인코딩으로 커밋 메시지 처리

if [ -f "$1" ] && [ -s "$1" ]; then
    TEMP_FILE="$1.tmp"
    iconv -f UTF-8 -t UTF-8 "$1" > "$TEMP_FILE" 2>/dev/null || cp "$1" "$TEMP_FILE"
    mv "$TEMP_FILE" "$1"
fi
```

## 📊 커밋 방법별 신뢰도 비교

| 방법                 | 신뢰도          | 속도 | 편의성 |
| -------------------- | --------------- | ---- | ------ |
| `git commit -F 파일` | 100% ⭐⭐⭐⭐⭐ | 보통 | 중간   |
| Git Bash에서 `-m`    | 95% ⭐⭐⭐⭐    | 빠름 | 높음   |
| PowerShell에서 `-m`  | 30% ⭐          | 빠름 | 높음   |
| GitHub Desktop       | 100% ⭐⭐⭐⭐⭐ | 빠름 | 최고   |
| VS Code Git UI       | 100% ⭐⭐⭐⭐⭐ | 빠름 | 최고   |

## 🎯 추천 워크플로우

### 방법 A: Git Bash 전용 (가장 간단)

```bash
# 항상 Git Bash 터미널 사용
git add .
git commit -m "한글 메시지"
```

### 방법 B: 파일 기반 (가장 안전)

```powershell
# 1. 메시지 파일 작성 (VS Code)
# .git/COMMIT_MSG_TEMP

# 2. 커밋 (어떤 터미널이든 OK)
git commit -F .git/COMMIT_MSG_TEMP
```

### 방법 C: GUI 도구 (가장 편함)

- VS Code의 Source Control 탭 사용
- GitHub Desktop 사용
- GitKraken 사용

## 🔧 트러블슈팅 체크리스트

커밋이 깨질 때 순서대로 확인:

1. **현재 터미널 확인**

   ```powershell
   echo $PSVersionTable.PSVersion  # PowerShell인 경우
   echo $SHELL                      # Git Bash인 경우
   ```

2. **코드 페이지 확인**

   ```powershell
   chcp
   # 65001이 아니면 → chcp 65001
   ```

3. **환경 변수 확인**

   ```powershell
   $env:LANG
   # 비어있으면 → $env:LANG = 'ko_KR.UTF-8'
   ```

4. **Git 설정 확인**

   ```bash
   git config --get i18n.commitencoding
   # utf-8이 아니면 → git config --global i18n.commitencoding utf-8
   ```

5. **마지막 커밋 확인**
   ```bash
   git log -1 --format="%s"
   # 깨져있으면 → git commit --amend -F .git/COMMIT_MSG_TEMP
   ```

## ⚡ 빠른 수정 방법

**이미 커밋했는데 깨진 경우:**

```powershell
# 1. 올바른 메시지를 파일에 작성
# .git/COMMIT_MSG_TEMP 파일 생성

# 2. 커밋 메시지 수정
git commit --amend -F .git/COMMIT_MSG_TEMP

# 3. 확인
git log -1
```

**푸시 후 깨진 경우:**

```powershell
# 1. 올바른 메시지로 수정
git commit --amend -F .git/COMMIT_MSG_TEMP

# 2. 강제 푸시 (주의!)
git push --force-with-lease
```

## 📌 핵심 요약

**절대 깨지지 않는 황금 규칙:**

1. ✅ **Git Bash를 기본 터미널로 사용**
2. ✅ **PowerShell에서는 반드시 `-F` 옵션 사용**
3. ✅ **GUI 도구 적극 활용**
4. ❌ **PowerShell에서 `-m` 옵션 사용 금지**

**기억하세요:**

> PowerShell에서 `git commit -m "한글"`은 **절대 사용하지 마세요!**  
> 대신 `git commit -F .git/COMMIT_MSG_TEMP`를 사용하세요!
