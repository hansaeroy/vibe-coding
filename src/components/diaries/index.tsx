"use client";

import { useState } from "react";
import SelectBox from "@/commons/components/selectbox";
import SearchBar from "@/commons/components/searchbar";
import Button from "@/commons/components/button";
import styles from "./styles.module.css";

export default function Diaries() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  // 필터 옵션
  const filterOptions = [
    { value: "all", label: "전체" },
    { value: "happy", label: "기쁨" },
    { value: "sad", label: "슬픔" },
    { value: "angry", label: "화남" },
    { value: "surprise", label: "놀람" },
    { value: "etc", label: "기타" },
  ];

  // 필터 변경 핸들러
  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 검색 실행 핸들러
  const handleSearch = (value: string) => {
    console.log("검색 실행:", value);
  };

  // 일기쓰기 버튼 클릭 핸들러
  const handleWriteDiary = () => {
    console.log("일기쓰기 버튼 클릭");
  };

  return (
    <div className={styles.container}>
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
              onChange={handleFilterChange}
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
      <div className={styles.main}>Main Content Area</div>

      {/* Gap */}
      <div className={styles.paginationGap}></div>

      {/* Pagination */}
      <div className={styles.pagination}>Pagination Area</div>

      {/* Gap */}
      <div className={styles.paginationGap}></div>
    </div>
  );
}
