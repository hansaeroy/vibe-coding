// URL 경로 및 페이지 설정 관리

// 접근 가능 상태 타입
export enum AccessType {
  PUBLIC = "PUBLIC", // 누구나
  MEMBERS_ONLY = "MEMBERS_ONLY", // 회원전용
}

// 노출 가능 컴포넌트 설정 인터페이스
export interface LayoutVisibility {
  header: {
    visible: boolean;
    logo: boolean;
    darkModeToggle: boolean;
  };
  banner: boolean;
  navigation: boolean;
  footer: boolean;
}

// 페이지 정보 인터페이스
export interface PageInfo {
  path: string;
  accessType: AccessType;
  layout: LayoutVisibility;
}

// URL 경로 상수
export const ROUTES = {
  // 메인 페이지
  HOME: "/",
  // 인증 관련
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
  // 일기 관련
  DIARY: {
    LIST: "/diaries",
    DETAIL: (id?: string) => `/diaries/${id || "[id]"}`,
  },
  // 사진 관련
  PICTURE: {
    LIST: "/pictures",
  },
} as const;

// 페이지별 상세 정보
export const PAGE_INFO: Record<string, PageInfo> = {
  // 메인 페이지
  [ROUTES.HOME]: {
    path: ROUTES.HOME,
    accessType: AccessType.PUBLIC,
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
  // 인증 페이지
  [ROUTES.AUTH.LOGIN]: {
    path: ROUTES.AUTH.LOGIN,
    accessType: AccessType.PUBLIC,
    layout: {
      header: {
        visible: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  [ROUTES.AUTH.SIGNUP]: {
    path: ROUTES.AUTH.SIGNUP,
    accessType: AccessType.PUBLIC,
    layout: {
      header: {
        visible: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  // 일기 페이지
  [ROUTES.DIARY.LIST]: {
    path: ROUTES.DIARY.LIST,
    accessType: AccessType.PUBLIC,
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
  // 일기 상세 페이지는 동적 라우팅이므로 키를 기본 패턴으로 설정
  "/diaries/[id]": {
    path: "/diaries/[id]",
    accessType: AccessType.MEMBERS_ONLY,
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: true,
    },
  },
  // 사진 페이지
  [ROUTES.PICTURE.LIST]: {
    path: ROUTES.PICTURE.LIST,
    accessType: AccessType.PUBLIC,
    layout: {
      header: {
        visible: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
} as const;

// 헬퍼 함수
export const getPageInfo = (path: string): PageInfo | undefined => {
  // 동적 라우팅 경로 처리 (예: /diaries/123 -> /diaries/[id])
  if (path.startsWith("/diaries/") && path !== ROUTES.DIARY.LIST) {
    return PAGE_INFO["/diaries/[id]"];
  }

  return PAGE_INFO[path];
};

// 접근 권한 확인 함수
export const isAccessible = (
  path: string,
  isLoggedIn: boolean = true, // 로그인 유저를 기본값으로 설정
  testMode: { bypassAuth?: boolean } = { bypassAuth: true } // 테스트 모드 옵션
): boolean => {
  const pageInfo = getPageInfo(path);

  if (!pageInfo) return false;

  // 테스트 모드에서 인증 우회 설정이 활성화된 경우 항상 접근 허용
  if (testMode.bypassAuth) {
    return true;
  }

  // 회원전용 페이지는 로그인 상태에서만 접근 가능
  if (pageInfo.accessType === AccessType.MEMBERS_ONLY && !isLoggedIn) {
    return false;
  }

  return true;
};

// 레이아웃 가시성 확인 함수
export const getLayoutVisibility = (
  path: string
): LayoutVisibility | undefined => {
  const pageInfo = getPageInfo(path);
  return pageInfo?.layout;
};
