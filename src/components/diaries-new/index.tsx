"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "@/commons/components/button";
import { Input } from "@/commons/components/input";
import {
  EmotionType,
  EMOTION_INFO,
  ALL_EMOTION_TYPES,
} from "@/commons/constants/enum";

export default function DiariesNew() {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(
    null
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleEmotionChange = (emotion: EmotionType) => {
    setSelectedEmotion(emotion);
  };

  const handleClose = () => {
    // 닫기 로직
    console.log("닫기 버튼 클릭");
  };

  const handleSubmit = () => {
    // 등록하기 로직
    console.log("등록하기", { selectedEmotion, title, content });
  };

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>일기 쓰기</h1>
      </div>

      {/* Gap */}
      <div className={styles.gap}></div>

      {/* Emotion Box */}
      <div className={styles.emotionBox}>
        <h2 className={styles.emotionTitle}>오늘 기분은 어땟나요?</h2>
        <div className={styles.emotionRadioGroup}>
          {ALL_EMOTION_TYPES.map((emotionType) => {
            const emotionInfo = EMOTION_INFO[emotionType];
            return (
              <label key={emotionType} className={styles.emotionRadioItem}>
                <input
                  type="radio"
                  name="emotion"
                  value={emotionType}
                  checked={selectedEmotion === emotionType}
                  onChange={() => handleEmotionChange(emotionType)}
                  className={styles.emotionRadioInput}
                />
                <span className={styles.emotionRadioLabel}>
                  {emotionInfo.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Gap */}
      <div className={styles.gap}></div>

      {/* Input Title */}
      <div className={styles.inputTitle}>
        <label className={styles.inputLabel}>제목</label>
        <Input
          variant="primary"
          size="large"
          theme="light"
          placeholder="제목을 입력합니다."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.titleInput}
        />
      </div>

      {/* Gap Small */}
      <div className={styles.gapSmall}></div>

      {/* Input Content */}
      <div className={styles.inputContent}>
        <label className={styles.inputLabel}>내용</label>
        <textarea
          placeholder="내용을 입력합니다."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.contentTextarea}
        />
      </div>

      {/* Gap */}
      <div className={styles.gap}></div>

      {/* Footer */}
      <div className={styles.footer}>
        <Button
          variant="secondary"
          size="large"
          theme="light"
          onClick={handleClose}
          className={styles.closeButton}
        >
          닫기
        </Button>
        <Button
          variant="primary"
          size="large"
          theme="light"
          onClick={handleSubmit}
          className={styles.submitButton}
        >
          등록하기
        </Button>
      </div>
    </div>
  );
}
