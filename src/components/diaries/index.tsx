"use client";

import { useState } from "react";
import SelectBox from "@/commons/components/selectbox";
import SearchBar from "@/commons/components/searchbar";
import Button from "@/commons/components/button";
import Pagination from "@/commons/components/pagination";
import { EmotionType, getEmotionInfo } from "@/commons/constants/enum";
import { useLinkModal } from "./hooks/index.link.modal.hook";
import styles from "./styles.module.css";

// 일기 데이터 타입 정의
interface DiaryData {
  id: number;
  emotion: EmotionType;
  date: string;
  title: string;
  image: string;
}

export default function Diaries() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 모달 훅 사용
  const { openDiaryModal } = useLinkModal();

  // 페이지당 아이템 수
  const ITEMS_PER_PAGE = 6;

  // Mock 일기 데이터
  const mockDiaries: DiaryData[] = [
    {
      id: 1,
      emotion: EmotionType.SAD,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다. 한줄까지만 노출 됩니다.",
      image: "/images/emotion-sad-m.png",
    },
    {
      id: 2,
      emotion: EmotionType.SURPRISE,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-surprise-m.png",
    },
    {
      id: 3,
      emotion: EmotionType.ANGRY,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-angry-m.png",
    },
    {
      id: 4,
      emotion: EmotionType.HAPPY,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-happy-m.png",
    },
    {
      id: 5,
      emotion: EmotionType.ETC,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다. 한줄까지만 노출 됩니다.",
      image: "/images/emotion-etc-m.png",
    },
    {
      id: 6,
      emotion: EmotionType.SURPRISE,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-surprise-m.png",
    },
    {
      id: 7,
      emotion: EmotionType.ANGRY,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-angry-m.png",
    },
    {
      id: 8,
      emotion: EmotionType.HAPPY,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-happy-m.png",
    },
    {
      id: 9,
      emotion: EmotionType.SAD,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다. 한줄까지만 노출 됩니다.",
      image: "/images/emotion-sad-m.png",
    },
    {
      id: 10,
      emotion: EmotionType.SURPRISE,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-surprise-m.png",
    },
    {
      id: 11,
      emotion: EmotionType.ANGRY,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-angry-m.png",
    },
    {
      id: 12,
      emotion: EmotionType.HAPPY,
      date: "2024. 03. 12",
      title: "타이틀 영역 입니다.",
      image: "/images/emotion-happy-m.png",
    },
  ];

  // 필터 옵션
  const filterOptions = [
    { value: "all", label: "전체" },
    { value: "happy", label: "기쁨" },
    { value: "sad", label: "슬픔" },
    { value: "angry", label: "화남" },
    { value: "surprise", label: "놀람" },
    { value: "etc", label: "기타" },
  ];

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 검색 실행 핸들러
  const handleSearch = (value: string) => {
    console.log("검색 실행:", value);
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 필터 변경 시 첫 페이지로 이동
  const handleFilterChangeWithReset = (value: string) => {
    setSelectedFilter(value);
    setCurrentPage(1);
  };

  // 일기쓰기 버튼 클릭 핸들러
  const handleWriteDiary = () => {
    openDiaryModal();
  };

  // 필터링된 일기 데이터
  const filteredDiaries = mockDiaries.filter((diary) => {
    // 감정 필터 적용
    if (selectedFilter !== "all") {
      const emotionMap: Record<string, EmotionType> = {
        happy: EmotionType.HAPPY,
        sad: EmotionType.SAD,
        angry: EmotionType.ANGRY,
        surprise: EmotionType.SURPRISE,
        etc: EmotionType.ETC,
      };

      if (diary.emotion !== emotionMap[selectedFilter]) {
        return false;
      }
    }

    // 검색어 필터 적용
    if (searchValue.trim()) {
      return diary.title.toLowerCase().includes(searchValue.toLowerCase());
    }

    return true;
  });

  // 페이지네이션 계산 (표시용)
  const totalPages = Math.ceil(filteredDiaries.length / ITEMS_PER_PAGE);

  return (
    <div className={styles.container} data-testid="diaries-page">
      {/* Gap */}
      <div className={styles.gap}></div>

      {/* Search */}
      <div className={styles.search}>
        <div className={styles.searchContent}>
          {/* 왼쪽 그룹: 필터 + 검색바 */}
          <div className={styles.leftGroup}>
            {/* 필터 선택박스 */}
            <SelectBox
              variant="primary"
              size="large"
              theme="light"
              options={filterOptions}
              value={selectedFilter}
              onChange={handleFilterChangeWithReset}
              placeholder="전체"
              className={styles.filterSelect}
            />

            {/* 검색바 */}
            <SearchBar
              variant="primary"
              size="large"
              theme="light"
              placeholder="검색어를 입력해 주세요."
              value={searchValue}
              onChange={handleSearchChange}
              onSearch={handleSearch}
              showIcon={true}
              containerClassName={styles.searchBar}
            />
          </div>

          {/* 오른쪽 그룹: 일기쓰기 버튼 */}
          <Button
            variant="primary"
            size="large"
            theme="light"
            onClick={handleWriteDiary}
            className={styles.writeButton}
            data-testid="write-diary-button"
          >
            <img
              src="/icons/plus_outline_light_m.svg"
              alt="추가"
              width={24}
              height={24}
              className={styles.buttonIcon}
            />
            일기쓰기
          </Button>
        </div>
      </div>

      {/* Gap */}
      <div className={styles.mainGap}></div>

      {/* Main */}
      <div className={styles.main}>
        {filteredDiaries.length > 0 ? (
          <div className={styles.diaryGrid}>
            {filteredDiaries.map((diary) => {
              const emotionInfo = getEmotionInfo(diary.emotion);
              return (
                <div key={diary.id} className={styles.diaryCard}>
                  {/* 카드 이미지 */}
                  <div className={styles.cardImage}>
                    <img
                      src={diary.image}
                      alt={diary.title}
                      className={styles.cardImageImg}
                    />
                    <button className={styles.closeButton}>
                      <img
                        src="/icons/close_outline_light_s.svg"
                        alt="닫기"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>

                  {/* 카드 콘텐츠 */}
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <span
                        className={styles.emotionText}
                        style={{ color: emotionInfo.color }}
                      >
                        {emotionInfo.label}
                      </span>
                      <span className={styles.dateText}>{diary.date}</span>
                    </div>
                    <div className={styles.cardTitle}>{diary.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>조건에 맞는 일기가 없습니다.</p>
          </div>
        )}
      </div>

      {/* Gap */}
      <div className={styles.paginationGap}></div>

      {/* Pagination */}
      <div className={styles.pagination}>
        {filteredDiaries.length > 0 && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            variant="primary"
            size="medium"
            theme="light"
            visiblePages={5}
          />
        )}
      </div>

      {/* Gap */}
      <div className={styles.paginationGap}></div>
    </div>
  );
}
