"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { ROUTES } from "@/commons/constants/url";

// 탭 타입 정의
export type TabType = "diary" | "picture";

// 라우팅 훅 반환 타입
export interface UseLinkRoutingReturn {
  currentPath: string;
  activeTab: TabType;
  navigateToDiary: () => void;
  navigateToPicture: () => void;
  navigateToHome: () => void;
  isActiveTab: (tab: TabType) => boolean;
}

/**
 * 레이아웃 네비게이션을 위한 라우팅 훅
 * 현재 경로를 감지하고 활성 탭 상태를 관리하며, 페이지 이동 기능을 제공합니다.
 */
export const useLinkRouting = (): UseLinkRoutingReturn => {
  const pathname = usePathname();
  const router = useRouter();

  // 현재 경로에 따른 활성 탭 결정
  const getActiveTab = useCallback((): TabType => {
    if (pathname === ROUTES.DIARY.LIST || pathname.startsWith("/diaries/")) {
      return "diary";
    }
    if (pathname === ROUTES.PICTURE.LIST) {
      return "picture";
    }
    // 기본값은 일기 탭
    return "diary";
  }, [pathname]);

  const activeTab = getActiveTab();

  // 일기 페이지로 이동
  const navigateToDiary = useCallback(() => {
    router.push(ROUTES.DIARY.LIST);
  }, [router]);

  // 사진 페이지로 이동
  const navigateToPicture = useCallback(() => {
    router.push(ROUTES.PICTURE.LIST);
  }, [router]);

  // 홈(일기 목록) 페이지로 이동
  const navigateToHome = useCallback(() => {
    router.push(ROUTES.DIARY.LIST);
  }, [router]);

  // 특정 탭이 활성 상태인지 확인
  const isActiveTab = useCallback(
    (tab: TabType): boolean => {
      return activeTab === tab;
    },
    [activeTab]
  );

  return {
    currentPath: pathname,
    activeTab,
    navigateToDiary,
    navigateToPicture,
    navigateToHome,
    isActiveTab,
  };
};
