import { test, expect } from "@playwright/test";

test.describe("Layout Link Routing Tests", () => {
  test.beforeEach(async ({ page }) => {
    // 각 테스트 전에 일기 목록 페이지로 이동
    await page.goto("/diaries");
    // 페이지가 완전히 로드될 때까지 대기 (고정식별자 사용)
    await page.waitForSelector('[data-testid="diary-tab"]');
  });

  test("헤더 로고 클릭 시 일기 목록 페이지로 이동", async ({ page }) => {
    // 헤더 로고 클릭
    await page.click('[data-testid="header-logo"]');

    // URL이 일기 목록 페이지인지 확인
    await expect(page).toHaveURL("/diaries");

    // 일기 탭이 활성 상태인지 확인
    const diaryTab = page.locator('[data-testid="diary-tab"]');
    await expect(diaryTab).toHaveClass(/tabActive/);
  });

  test("일기보관함 탭 클릭 시 일기 목록 페이지로 이동", async ({ page }) => {
    // 일기보관함 탭 클릭
    await page.click('[data-testid="diary-tab"]');

    // URL이 일기 목록 페이지인지 확인
    await expect(page).toHaveURL("/diaries");

    // 일기 탭이 활성 상태인지 확인
    const diaryTab = page.locator('[data-testid="diary-tab"]');
    await expect(diaryTab).toHaveClass(/tabActive/);
  });

  test("사진보관함 탭 클릭 시 사진 목록 페이지로 이동", async ({ page }) => {
    // 사진보관함 탭 클릭
    await page.click('[data-testid="picture-tab"]');

    // URL이 사진 목록 페이지인지 확인
    await expect(page).toHaveURL("/pictures");

    // 사진 탭이 활성 상태인지 확인
    const pictureTab = page.locator('[data-testid="picture-tab"]');
    await expect(pictureTab).toHaveClass(/tabActive/);

    // 일기 탭이 비활성 상태인지 확인
    const diaryTab = page.locator('[data-testid="diary-tab"]');
    await expect(diaryTab).not.toHaveClass(/tabActive/);
  });

  test("일기 상세 페이지에서 일기 탭이 활성 상태인지 확인", async ({
    page,
  }) => {
    // 일기 상세 페이지로 이동 (테스트용 ID 사용)
    await page.goto("/diaries/test-id");

    // 페이지 로드 대기
    await page.waitForSelector('[data-testid="diary-tab"]');

    // URL이 일기 상세 페이지인지 확인
    await expect(page).toHaveURL("/diaries/test-id");

    // 일기 탭이 활성 상태인지 확인 (상세 페이지도 일기 관련이므로)
    const diaryTab = page.locator('[data-testid="diary-tab"]');
    await expect(diaryTab).toHaveClass(/tabActive/);
  });

  test("탭 활성 상태 스타일 변경 확인", async ({ page }) => {
    // 초기 상태: 일기 탭이 활성
    const diaryTab = page.locator('[data-testid="diary-tab"]');
    const pictureTab = page.locator('[data-testid="picture-tab"]');

    await expect(diaryTab).toHaveClass(/tabActive/);
    await expect(pictureTab).not.toHaveClass(/tabActive/);

    // 사진 탭 클릭
    await page.click('[data-testid="picture-tab"]');

    // 상태 변경 확인
    await expect(pictureTab).toHaveClass(/tabActive/);
    await expect(diaryTab).not.toHaveClass(/tabActive/);

    // 일기 탭 클릭
    await page.click('[data-testid="diary-tab"]');

    // 상태 변경 확인
    await expect(diaryTab).toHaveClass(/tabActive/);
    await expect(pictureTab).not.toHaveClass(/tabActive/);
  });
});
