import { test, expect } from "@playwright/test";

// 테스트 대상 페이지들
const testPages = [
  { path: "/diaries", name: "일기 목록 페이지" },
  { path: "/diaries/123", name: "일기 상세 페이지" },
  { path: "/pictures", name: "사진 목록 페이지" },
];

// 테스트 제외 페이지들
const skipPages = [
  "/auth/login",
  "/auth/signup",
  "/pictures", // 요구사항에 따라 제외
];

test.describe("Layout Area Visibility Hook", () => {
  for (const page of testPages) {
    // 제외 페이지는 스킵
    if (skipPages.includes(page.path)) {
      test.skip(`should skip ${page.name}`, () => {});
      continue;
    }

    test(`${page.name} - 레이아웃 영역 노출 확인`, async ({
      page: playwrightPage,
    }) => {
      // 페이지 이동
      await playwrightPage.goto(`http://localhost:3000${page.path}`);

      // 페이지 로드 완료 대기 (data-testid 기반)
      await playwrightPage.waitForSelector('[data-testid="header-logo"]', {
        timeout: 500,
      });

      // 일기 목록 페이지 테스트
      if (page.path === "/diaries") {
        // Header 영역 확인
        await expect(playwrightPage.locator("header")).toBeVisible();
        await expect(
          playwrightPage.locator('[data-testid="header-logo"]')
        ).toBeVisible();

        // Banner 영역 확인
        await expect(playwrightPage.locator("section.banner")).toBeVisible();

        // Navigation 영역 확인
        await expect(playwrightPage.locator("nav.navigation")).toBeVisible();
        await expect(
          playwrightPage.locator('[data-testid="diary-tab"]')
        ).toBeVisible();
        await expect(
          playwrightPage.locator('[data-testid="picture-tab"]')
        ).toBeVisible();

        // Footer 영역 확인
        await expect(playwrightPage.locator("footer")).toBeVisible();
      }

      // 일기 상세 페이지 테스트
      if (page.path === "/diaries/123") {
        // Header 영역 확인
        await expect(playwrightPage.locator("header")).toBeVisible();
        await expect(
          playwrightPage.locator('[data-testid="header-logo"]')
        ).toBeVisible();

        // Banner 영역 숨김 확인
        await expect(
          playwrightPage.locator("section.banner")
        ).not.toBeVisible();

        // Navigation 영역 숨김 확인
        await expect(
          playwrightPage.locator("nav.navigation")
        ).not.toBeVisible();

        // Footer 영역 확인
        await expect(playwrightPage.locator("footer")).toBeVisible();
      }
    });
  }

  test("인증 페이지들 - 모든 레이아웃 영역 숨김 확인", async ({
    page: playwrightPage,
  }) => {
    const authPages = ["/auth/login", "/auth/signup"];

    for (const authPath of authPages) {
      await playwrightPage.goto(`http://localhost:3000${authPath}`);

      // 페이지 로드 대기 (인증 페이지는 다른 구조일 수 있음)
      await playwrightPage.waitForLoadState("domcontentloaded");

      // 모든 레이아웃 영역이 숨겨져 있는지 확인
      const header = playwrightPage.locator("header");
      const banner = playwrightPage.locator("section.banner");
      const navigation = playwrightPage.locator("nav.navigation");
      const footer = playwrightPage.locator("footer");

      // 영역이 존재하지 않거나 숨겨져 있어야 함
      if ((await header.count()) > 0) {
        await expect(header).not.toBeVisible();
      }
      if ((await banner.count()) > 0) {
        await expect(banner).not.toBeVisible();
      }
      if ((await navigation.count()) > 0) {
        await expect(navigation).not.toBeVisible();
      }
      if ((await footer.count()) > 0) {
        await expect(footer).not.toBeVisible();
      }
    }
  });

  test("존재하지 않는 페이지 - 기본 레이아웃 동작 확인", async ({
    page: playwrightPage,
  }) => {
    await playwrightPage.goto("http://localhost:3000/non-existent-page");

    // 404 페이지에서도 기본 레이아웃이 동작하는지 확인
    // (실제 구현에 따라 다를 수 있음)
    await playwrightPage.waitForLoadState("domcontentloaded");

    // 에러 페이지에서도 기본 레이아웃 영역들이 보이는지 확인
    const header = playwrightPage.locator("header");
    const footer = playwrightPage.locator("footer");

    if ((await header.count()) > 0) {
      await expect(header).toBeVisible();
    }
    if ((await footer.count()) > 0) {
      await expect(footer).toBeVisible();
    }
  });
});
