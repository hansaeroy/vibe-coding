// 피그마 파운데이션에서 추출한 타이포그래피 토큰
// 한글/영문 폰트 분기 및 모바일/데스크톱 반응형 지원

// 폰트 패밀리 정의
export const fontFamilies = {
  korean:
    'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  english:
    'SUIT Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
} as const;

// 폰트 웨이트 정의
export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// 기본 타이포그래피 토큰 (데스크톱 기준)
export const typography = {
  // 웹 헤드라인 (Web Headline)
  webHeadline: {
    headline01: {
      fontSize: 48,
      lineHeight: 60,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
    headline02: {
      fontSize: 36,
      lineHeight: 48,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
    headline03: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
  },

  // 헤드라인 (Headline)
  headline: {
    headline01: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
    },
    headline02: {
      fontSize: 22,
      lineHeight: 30,
      fontWeight: fontWeights.extrabold,
      letterSpacing: 0,
    },
    headline03: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
    },
  },

  // 타이틀 (Title)
  title: {
    title01: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
    },
    title02: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
    },
    title03: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
    },
    subtitle01: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
    subtitle02: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
  },

  // 본문 (Body)
  body: {
    body01: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: fontWeights.medium,
      letterSpacing: 0,
    },
    body02Medium: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: fontWeights.medium,
      letterSpacing: 0,
    },
    body03: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: fontWeights.medium,
      letterSpacing: 0,
    },
    body01Regular: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: fontWeights.regular,
      letterSpacing: 0,
    },
    body02Small: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: fontWeights.regular,
      letterSpacing: 0,
    },
    body03Regular: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: fontWeights.regular,
      letterSpacing: 0,
    },
  },

  // 캡션 (Caption)
  caption: {
    caption01: {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
    caption02Medium: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
    caption02Small: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: fontWeights.medium,
      letterSpacing: 0,
    },
    caption03: {
      fontSize: 8,
      lineHeight: 10,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
  },
} as const;

// 모바일 타이포그래피 토큰 (반응형)
export const mobileTypography = {
  // 웹 헤드라인 (모바일에서 축소)
  webHeadline: {
    headline01: {
      fontSize: 36,
      lineHeight: 48,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
    headline02: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
    headline03: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: fontWeights.semibold,
      letterSpacing: 0,
    },
  },

  // 헤드라인 (모바일에서 축소)
  headline: {
    headline01: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
    },
    headline02: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: fontWeights.extrabold,
      letterSpacing: 0,
    },
    headline03: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
    },
  },

  // 타이틀, 본문, 캡션은 모바일에서도 동일
  title: typography.title,
  body: typography.body,
  caption: typography.caption,
} as const;

// 시맨틱 타이포그래피 (용도별 스타일)
export const semanticTypography = {
  // 페이지 제목
  pageTitle: typography.webHeadline.headline01,
  sectionTitle: typography.webHeadline.headline02,
  subsectionTitle: typography.webHeadline.headline03,

  // 컨텐츠 제목
  contentTitle: typography.headline.headline01,
  contentSubtitle: typography.headline.headline02,
  cardTitle: typography.title.title01,
  cardSubtitle: typography.title.subtitle01,

  // 본문 텍스트
  bodyLarge: typography.body.body01,
  bodyMedium: typography.body.body02Medium,
  bodySmall: typography.body.body03,
  bodyRegular: typography.body.body01Regular,

  // 보조 텍스트
  caption: typography.caption.caption01,
  label: typography.caption.caption02Medium,
  helper: typography.caption.caption02Small,
  micro: typography.caption.caption03,
} as const;

// CSS 클래스명 생성 헬퍼
export const typographyClasses = {
  // 웹 헤드라인
  'web-headline-01': 'text-web-headline-01',
  'web-headline-02': 'text-web-headline-02',
  'web-headline-03': 'text-web-headline-03',

  // 헤드라인
  'headline-01': 'text-headline-01',
  'headline-02': 'text-headline-02',
  'headline-03': 'text-headline-03',

  // 타이틀
  'title-01': 'text-title-01',
  'title-02': 'text-title-02',
  'title-03': 'text-title-03',
  'subtitle-01': 'text-subtitle-01',
  'subtitle-02': 'text-subtitle-02',

  // 본문
  'body-01': 'text-body-01',
  'body-02-medium': 'text-body-02-medium',
  'body-03': 'text-body-03',
  'body-01-regular': 'text-body-01-regular',
  'body-02-small': 'text-body-02-small',
  'body-03-regular': 'text-body-03-regular',

  // 캡션
  'caption-01': 'text-caption-01',
  'caption-02-medium': 'text-caption-02-medium',
  'caption-02-small': 'text-caption-02-small',
  'caption-03': 'text-caption-03',
} as const;

// 타입 정의
export type FontFamily = keyof typeof fontFamilies;
export type FontWeight = keyof typeof fontWeights;
export type TypographyCategory = keyof typeof typography;

// 타이포그래피 스타일 객체 타입
export interface TypographyStyleObject {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  letterSpacing: number;
}

export type SemanticTypography = keyof typeof semanticTypography;
export type TypographyClass = keyof typeof typographyClasses;

// 타이포그래피 스타일 생성 헬퍼 함수
export const createTypographyStyle = (
  category: TypographyCategory,
  style: string,
  fontFamily: FontFamily = 'korean'
) => {
  const typographyStyle = (typography[category] as Record<string, TypographyStyleObject>)[style];
  if (!typographyStyle) {
    throw new Error(`Typography style not found: ${category}.${style}`);
  }

  return {
    fontFamily: fontFamilies[fontFamily],
    fontSize: `${typographyStyle.fontSize}px`,
    lineHeight: `${typographyStyle.lineHeight}px`,
    fontWeight: typographyStyle.fontWeight,
    letterSpacing: `${typographyStyle.letterSpacing}px`,
  };
};

// 반응형 타이포그래피 스타일 생성 헬퍼 함수
export const createResponsiveTypographyStyle = (
  category: TypographyCategory,
  style: string,
  fontFamily: FontFamily = 'korean'
) => {
  const desktopStyle = (typography[category] as Record<string, TypographyStyleObject>)[style];
  const mobileStyle =
    (mobileTypography[category] as Record<string, TypographyStyleObject> | undefined)?.[style] || desktopStyle;

  if (!desktopStyle) {
    throw new Error(`Typography style not found: ${category}.${style}`);
  }

  return {
    fontFamily: fontFamilies[fontFamily],
    // 데스크톱 스타일
    fontSize: `${desktopStyle.fontSize}px`,
    lineHeight: `${desktopStyle.lineHeight}px`,
    fontWeight: desktopStyle.fontWeight,
    letterSpacing: `${desktopStyle.letterSpacing}px`,
    // 모바일 스타일 (미디어 쿼리용)
    mobile: {
      fontSize: `${mobileStyle.fontSize}px`,
      lineHeight: `${mobileStyle.lineHeight}px`,
      fontWeight: mobileStyle.fontWeight,
      letterSpacing: `${mobileStyle.letterSpacing}px`,
    },
  };
};
