import { test, expect } from '@playwright/test';

test.describe('링크 모달 닫기 기능 테스트', () => {
  test.beforeEach(async ({ page }) => {
    // 다이어리 페이지로 이동
    await page.goto('/diaries');
    
    // 페이지가 완전히 로드될 때까지 대기 (data-testid 사용)
    await page.waitForSelector('[data-testid="diary-list"]');
    
    // 일기쓰기 버튼 클릭
    await page.click('button:has-text("일기쓰기")');
    
    // 일기 작성 폼 모달이 나타날 때까지 대기
    await page.waitForSelector('[data-testid="diary-form"]');
  });

  test('닫기 버튼 클릭 시 등록취소 모달이 열려야 함', async ({ page }) => {
    // 닫기 버튼 클릭
    await page.click('[data-testid="close-button"]');
    
    // 등록취소 모달이 나타나는지 확인
    const cancelModal = await page.waitForSelector('[data-testid="cancel-modal"]');
    expect(cancelModal).toBeTruthy();
  });

  test('등록취소 모달에서 계속작성 버튼 클릭 시 등록취소 모달만 닫혀야 함', async ({ page }) => {
    // 닫기 버튼 클릭
    await page.click('[data-testid="close-button"]');
    
    // 등록취소 모달이 나타날 때까지 대기
    await page.waitForSelector('[data-testid="cancel-modal"]');
    
    // 계속작성 버튼 클릭
    await page.click('button:has-text("계속 작성")');
    
    // 등록취소 모달이 닫혔는지 확인
    const cancelModalClosed = await page.locator('[data-testid="cancel-modal"]').count() === 0;
    expect(cancelModalClosed).toBeTruthy();
    
    // 일기 작성 폼 모달은 여전히 열려있는지 확인
    const diaryFormVisible = await page.isVisible('[data-testid="diary-form"]');
    expect(diaryFormVisible).toBeTruthy();
  });

  test('등록취소 모달에서 등록취소 버튼 클릭 시 모든 모달이 닫혀야 함', async ({ page }) => {
    // 닫기 버튼 클릭
    await page.click('[data-testid="close-button"]');
    
    // 등록취소 모달이 나타날 때까지 대기
    await page.waitForSelector('[data-testid="cancel-modal"]');
    
    // 등록취소 버튼 클릭
    await page.click('button:has-text("등록 취소")');
    
    // 모든 모달이 닫혔는지 확인
    const allModalsClosed = await page.locator('[data-testid="modal-overlay"]').count() === 0;
    expect(allModalsClosed).toBeTruthy();
  });
});