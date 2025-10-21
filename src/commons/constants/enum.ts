import { colors } from "./color";

// 감정 타입 정의
export enum EmotionType {
  HAPPY = "HAPPY",
  SAD = "SAD",
  ANGRY = "ANGRY",
  SURPRISE = "SURPRISE",
  ETC = "ETC",
}

// 이미지 사이즈 타입
export enum ImageSize {
  MEDIUM = "M",
  SMALL = "S",
}

// 감정별 상세 정보 인터페이스
export interface EmotionInfo {
  type: EmotionType;
  label: string;
  color: string;
  images: {
    medium: string;
    small: string;
  };
}

// 감정별 상세 정보 매핑
export const EMOTION_INFO: Record<EmotionType, EmotionInfo> = {
  [EmotionType.HAPPY]: {
    type: EmotionType.HAPPY,
    label: "행복해요",
    color: colors.red[60],
    images: {
      medium: "/images/emotion-happy-m.png",
      small: "/images/emotion-happy-s.png",
    },
  },
  [EmotionType.SAD]: {
    type: EmotionType.SAD,
    label: "슬퍼요",
    color: colors.blue[60],
    images: {
      medium: "/images/emotion-sad-m.png",
      small: "/images/emotion-sad-s.png",
    },
  },
  [EmotionType.ANGRY]: {
    type: EmotionType.ANGRY,
    label: "화나요",
    color: colors.gray[60],
    images: {
      medium: "/images/emotion-angry-m.png",
      small: "/images/emotion-angry-s.png",
    },
  },
  [EmotionType.SURPRISE]: {
    type: EmotionType.SURPRISE,
    label: "놀랐어요",
    color: colors.yellow[60],
    images: {
      medium: "/images/emotion-surprise-m.png",
      small: "/images/emotion-surprise-s.png",
    },
  },
  [EmotionType.ETC]: {
    type: EmotionType.ETC,
    label: "기타",
    color: colors.green[60],
    images: {
      medium: "/images/emotion-etc-m.png",
      small: "/images/emotion-etc-s.png",
    },
  },
} as const;

// 헬퍼 함수들
export const getEmotionInfo = (type: EmotionType): EmotionInfo => {
  return EMOTION_INFO[type];
};

export const getEmotionLabel = (type: EmotionType): string => {
  return EMOTION_INFO[type].label;
};

export const getEmotionColor = (type: EmotionType): string => {
  return EMOTION_INFO[type].color;
};

export const getEmotionImage = (
  type: EmotionType,
  size: ImageSize = ImageSize.MEDIUM
): string => {
  return size === ImageSize.MEDIUM
    ? EMOTION_INFO[type].images.medium
    : EMOTION_INFO[type].images.small;
};

// 모든 감정 타입 배열
export const ALL_EMOTION_TYPES = Object.values(EmotionType);

// 감정 타입 검증 함수
export const isValidEmotionType = (value: string): value is EmotionType => {
  return Object.values(EmotionType).includes(value as EmotionType);
};

// 타입 가드 함수
export const isEmotionType = (value: unknown): value is EmotionType => {
  return typeof value === "string" && isValidEmotionType(value);
};
