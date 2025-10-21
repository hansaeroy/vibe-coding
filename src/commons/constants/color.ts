// 피그마 파운데이션에서 추출한 컬러 토큰
// 다크모드를 포함한 모든 컬러 시스템 지원

export const colors = {
  // Blue 계열
  blue: {
    5: "#f0f7ff",
    10: "#dbeeff",
    20: "#bddbff",
    30: "#93beff",
    40: "#6da5fa", // System color
    50: "#497cff",
    60: "#3a5cf3", // System color
    70: "#274ae1",
    80: "#1530a6",
    90: "#0b2184",
  },

  // Gray 계열
  gray: {
    white: "#ffffff",
    5: "#f2f2f2",
    10: "#e4e4e4",
    20: "#d4d3d3",
    30: "#c7c7c7",
    40: "#ababab",
    50: "#919191",
    60: "#777777",
    70: "#5f5f5f",
    80: "#333333",
    90: "#1c1c1c",
    black: "#000000",
  },

  // Red 계열 (Error color)
  red: {
    5: "#fdd7dc",
    10: "#f797a4",
    20: "#f4677a",
    30: "#f03851", // Error color
    40: "#e4112e",
    50: "#b40e24",
    60: "#850a1b",
  },

  // Green 계열 (Success color)
  green: {
    5: "#d3f3e0",
    10: "#92e6b9",
    20: "#15d66f",
    30: "#12b75f", // Success color
    40: "#109c51",
    50: "#0e723c",
    60: "#084424",
  },

  // Yellow 계열
  yellow: {
    5: "#ffe499",
    10: "#ffd666",
    20: "#ffc933",
    30: "#ffb300",
    40: "#eba500",
    50: "#d69600",
    60: "#b27d00",
  },

  // Cool Gray 계열
  coolGray: {
    1: "#f8f8fa",
    5: "#f6f6f9",
    10: "#edeef2",
    20: "#dddfe5",
    30: "#d2d4dd",
    40: "#c7c9d5",
    50: "#bbbecd",
    60: "#b0b3c4",
  },

  // 그라데이션 (CSS에서 사용)
  gradient: {
    primary: "linear-gradient(135deg, #6da5fa 0%, #92eaf5 100%)",
    skeleton:
      "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 48.5%, transparent 100%)",
  },
} as const;

// 시맨틱 컬러 (용도별 색상)
export const semanticColors = {
  // 시스템 컬러
  primary: colors.gray.black, // #000000
  primaryDark: colors.gray[50], // #919191

  // 상태 컬러
  success: colors.green[30], // #12b75f
  error: colors.red[30], // #f03851
  warning: colors.yellow[30], // #ffb300

  // 텍스트 컬러
  text: {
    primary: colors.gray.black,
    secondary: colors.gray[60],
    tertiary: colors.gray[40],
    inverse: colors.gray.white,
  },

  // 배경 컬러
  background: {
    primary: colors.gray.white,
    secondary: colors.gray[5],
    tertiary: colors.gray[10],
    inverse: colors.gray.black,
  },

  // 보더 컬러
  border: {
    light: colors.gray[10],
    medium: colors.gray[20],
    strong: colors.gray[30],
  },
} as const;

// 다크모드 컬러 (CSS 변수로 관리)
export const darkModeColors = {
  // 텍스트 컬러 (다크모드)
  text: {
    primary: colors.gray.white,
    secondary: colors.gray[30],
    tertiary: colors.gray[50],
    inverse: colors.gray.black,
  },

  // 배경 컬러 (다크모드)
  background: {
    primary: colors.gray.black,
    secondary: colors.gray[90],
    tertiary: colors.gray[80],
    inverse: colors.gray.white,
  },

  // 보더 컬러 (다크모드)
  border: {
    light: colors.gray[80],
    medium: colors.gray[70],
    strong: colors.gray[60],
  },
} as const;

// 타입 정의
export type ColorScale = keyof typeof colors;
export type BlueShade = keyof typeof colors.blue;
export type GrayShade = keyof typeof colors.gray;
export type RedShade = keyof typeof colors.red;
export type GreenShade = keyof typeof colors.green;
export type YellowShade = keyof typeof colors.yellow;
export type CoolGrayShade = keyof typeof colors.coolGray;
