import { colors } from './color';

// 감정 타입 정의
export enum EmotionType {
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
  SURPRISE = 'SURPRISE',
  ETC = 'ETC',
}

// 이미지 사이즈 타입
export enum ImageSize {
  MEDIUM = 'M',
  SMALL = 'S',
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
    label: '행복해요',
    color: colors.red[60],
    images: {
      medium: '/icons/emotion-happy-m.svg',
      small: '/icons/emotion-happy-s.svg',
    },
  },
  [EmotionType.SAD]: {
    type: EmotionType.SAD,
    label: '슬퍼요',
    color: colors.blue[60],
    images: {
      medium: '/icons/emotion-sad-m.svg',
      small: '/icons/emotion-sad-s.svg',
    },
  },
  [EmotionType.ANGRY]: {
    type: EmotionType.ANGRY,
    label: '화나요',
    color: colors.gray[60],
    images: {
      medium: '/icons/emotion-angry-m.svg',
      small: '/icons/emotion-angry-s.svg',
    },
  },
  [EmotionType.SURPRISE]: {
    type: EmotionType.SURPRISE,
    label: '놀랐어요',
    color: colors.yellow[60],
    images: {
      medium: '/icons/emotion-surprise-m.svg',
      small: '/icons/emotion-surprise-s.svg',
    },
  },
  [EmotionType.ETC]: {
    type: EmotionType.ETC,
    label: '기타',
    color: colors.green[60],
    images: {
      medium: '/icons/emotion-etc-m.svg',
      small: '/icons/emotion-etc-s.svg',
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
  return typeof value === 'string' && isValidEmotionType(value);
};
