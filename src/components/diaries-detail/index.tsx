"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/commons/components/button";
import { Input } from "@/commons/components/input";
import {
  EmotionType,
  getEmotionInfo,
  getEmotionImage,
  ImageSize,
} from "@/commons/constants/enum";
import styles from "./styles.module.css";

// Mock 데이터
const mockDiaryData = {
  id: 1,
  title: "이것은 타이틀 입니다.",
  content:
    "내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다",
  emotion: EmotionType.HAPPY,
  createdAt: "2024. 07. 12",
};

// Mock 회고 데이터
const mockRetrospects = [
  {
    id: 1,
    text: "3년이 지나고 다시 보니 이때가 그립다.",
    createdAt: "2024. 09. 24",
  },
  {
    id: 2,
    text: "3년이 지나고 다시 보니 이때가 그립다.",
    createdAt: "2024. 09. 24",
  },
];

export default function DiariesDetail() {
  const [retrospectInput, setRetrospectInput] = useState("");
  const [retrospects, setRetrospects] = useState(mockRetrospects);

  const emotionInfo = getEmotionInfo(mockDiaryData.emotion);
  const emotionImageSrc = getEmotionImage(
    mockDiaryData.emotion,
    ImageSize.SMALL
  );

  const handleCopyContent = () => {
    navigator.clipboard.writeText(mockDiaryData.content);
    alert("내용이 복사되었습니다.");
  };

  const handleEdit = () => {
    console.log("수정 버튼 클릭");
  };

  const handleDelete = () => {
    console.log("삭제 버튼 클릭");
  };

  const handleRetrospectSubmit = () => {
    if (retrospectInput.trim()) {
      const newRetrospect = {
        id: Date.now(),
        text: retrospectInput.trim(),
        createdAt: new Date()
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\./g, ". ")
          .replace(/\s+$/, ""),
      };
      setRetrospects([newRetrospect, ...retrospects]);
      setRetrospectInput("");
    }
  };

  return (
    <div className={styles.container}>
      {/* Gap */}
      <div className={styles.gap}></div>

      {/* Detail Title */}
      <div className={styles.detailTitle}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{mockDiaryData.title}</h1>
        </div>
        <div className={styles.emotionAndDate}>
          <div className={styles.emotionSection}>
            <div className={styles.emotionIcon}>
              <Image
                src={emotionImageSrc}
                alt={emotionInfo.label}
                width={32}
                height={32}
              />
            </div>
            <span className={styles.emotionText}>{emotionInfo.label}</span>
          </div>
          <div className={styles.dateSection}>
            <span className={styles.dateText}>{mockDiaryData.createdAt}</span>
            <span className={styles.writtenText}>작성</span>
          </div>
        </div>
      </div>

      {/* Gap */}
      <div className={styles.gap24}></div>

      {/* Detail Content */}
      <div className={styles.detailContent}>
        <div className={styles.contentArea}>
          <div className={styles.contentLabel}>내용</div>
          <div className={styles.contentText}>{mockDiaryData.content}</div>
        </div>
        <div className={styles.copySection}>
          <button className={styles.copyButton} onClick={handleCopyContent}>
            <img
              src="/icons/copy_outline_light_m.svg"
              alt="복사"
              width={24}
              height={24}
            />
            <span className={styles.copyText}>내용 복사</span>
          </button>
        </div>
      </div>

      {/* Gap */}
      <div className={styles.gap24}></div>

      {/* Detail Footer */}
      <div className={styles.detailFooter}>
        <div className={styles.buttonGroup}>
          <Button
            variant="secondary"
            size="medium"
            theme="light"
            className={styles.buttonWidth}
            onClick={handleEdit}
          >
            수정
          </Button>
          <Button
            variant="secondary"
            size="medium"
            theme="light"
            className={styles.buttonWidth}
            onClick={handleDelete}
          >
            삭제
          </Button>
        </div>
      </div>

      {/* Gap */}
      <div className={styles.gap24}></div>

      {/* Retrospect Input */}
      <div className={styles.retrospectInput}>
        <div className={styles.retrospectInputLabel}>회고</div>
        <div className={styles.retrospectInputRow}>
          <Input
            variant="primary"
            size="medium"
            theme="light"
            placeholder="회고를 남겨보세요."
            value={retrospectInput}
            onChange={(e) => setRetrospectInput(e.target.value)}
            className={styles.retrospectInputField}
          />
          <Button
            variant="primary"
            size="large"
            theme="light"
            className={styles.retrospectInputButton}
            onClick={handleRetrospectSubmit}
          >
            입력
          </Button>
        </div>
      </div>

      {/* Gap */}
      <div className={styles.gap16}></div>

      {/* Retrospect List */}
      <div className={styles.retrospectList}>
        {retrospects.map((retrospect) => (
          <div key={retrospect.id} className={styles.retrospectItem}>
            <span className={styles.retrospectText}>{retrospect.text}</span>
            <span className={styles.retrospectDate}>
              [{retrospect.createdAt}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
