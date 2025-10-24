"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getLayoutVisibility, LayoutVisibility } from "@/commons/constants/url";

// 영역별 가시성 상태 타입
export interface AreaVisibility {
  header: {
    visible: boolean;
    logo: boolean;
  };
  banner: boolean;
  navigation: boolean;
  footer: boolean;
}

// 훅 반환 타입
export interface UseAreaVisibilityReturn {
  areaVisibility: AreaVisibility;
  isHeaderVisible: boolean;
  isBannerVisible: boolean;
  isNavigationVisible: boolean;
  isFooterVisible: boolean;
  isLogoVisible: boolean;
}

/**
 * 현재 경로에 따른 레이아웃 영역의 노출 여부를 관리하는 훅
 * url.ts의 PAGE_INFO 설정에 따라 각 영역의 가시성을 결정합니다.
 */
export const useAreaVisibility = (): UseAreaVisibilityReturn => {
  const pathname = usePathname();

  // 현재 경로에 따른 레이아웃 가시성 정보를 가져옴
  const layoutVisibility = useMemo(() => {
    return getLayoutVisibility(pathname);
  }, [pathname]);

  // 기본값 설정 (레이아웃 정보가 없는 경우 모든 영역 숨김)
  const defaultVisibility: AreaVisibility = {
    header: {
      visible: false,
      logo: false,
    },
    banner: false,
    navigation: false,
    footer: false,
  };

  // 현재 경로에 맞는 영역 가시성 정보
  const areaVisibility: AreaVisibility = useMemo(() => {
    if (!layoutVisibility) {
      return defaultVisibility;
    }

    return {
      header: {
        visible: layoutVisibility.header.visible,
        logo: layoutVisibility.header.logo,
      },
      banner: layoutVisibility.banner,
      navigation: layoutVisibility.navigation,
      footer: layoutVisibility.footer,
    };
  }, [layoutVisibility]);

  // 개별 영역 가시성 확인 함수들
  const isHeaderVisible = areaVisibility.header.visible;
  const isBannerVisible = areaVisibility.banner;
  const isNavigationVisible = areaVisibility.navigation;
  const isFooterVisible = areaVisibility.footer;
  const isLogoVisible = areaVisibility.header.logo;

  return {
    areaVisibility,
    isHeaderVisible,
    isBannerVisible,
    isNavigationVisible,
    isFooterVisible,
    isLogoVisible,
  };
};
