import { test, expect } from "@playwright/test";

test.describe("Diaries Link Modal E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // /diaries 페이지로 이동
    await page.goto("/diaries");

    // 페이지 로드 대기 (data-testid 사용)
    await page.waitForSelector('[data-testid="diaries-page"]', {
      timeout: 500,
    });
  });

  test("일기쓰기 버튼 클릭 시 모달이 열려야 한다", async ({ page }) => {
    // 일기쓰기 버튼 클릭
    await page.click('[data-testid="write-diary-button"]');

    // 모달이 표시되는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).toBeVisible();

    // 모달 내부의 일기쓰기 폼이 표시되는지 확인
    await expect(page.locator('[data-testid="diary-form"]')).toBeVisible();
  });

  test("모달 내부의 닫기 버튼 클릭 시 모달이 닫혀야 한다", async ({ page }) => {
    // 일기쓰기 버튼 클릭하여 모달 열기
    await page.click('[data-testid="write-diary-button"]');

    // 모달이 열렸는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).toBeVisible();

    // 닫기 버튼 클릭
    await page.click('[data-testid="close-modal-button"]');

    // 모달이 닫혔는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).not.toBeVisible();
  });

  test("모달 외부 클릭 시 모달이 닫혀야 한다", async ({ page }) => {
    // 일기쓰기 버튼 클릭하여 모달 열기
    await page.click('[data-testid="write-diary-button"]');

    // 모달이 열렸는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).toBeVisible();

    // 모달 외부(오버레이) 클릭
    await page.click('[data-testid="modal-overlay"]');

    // 모달이 닫혔는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).not.toBeVisible();
  });

  test("모달이 열린 상태에서 ESC 키로 모달이 닫혀야 한다", async ({ page }) => {
    // 일기쓰기 버튼 클릭하여 모달 열기
    await page.click('[data-testid="write-diary-button"]');

    // 모달이 열렸는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).toBeVisible();

    // ESC 키 누르기
    await page.keyboard.press("Escape");

    // 모달이 닫혔는지 확인
    await expect(page.locator('[data-testid="diary-modal"]')).not.toBeVisible();
  });
});
