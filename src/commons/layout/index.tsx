"use client";

import React from "react";
import styles from "./styles.module.css";
import { useLinkRouting } from "./hook/index.link.routing.hook";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const {
    navigateToDiary,
    navigateToPicture,
    navigateToHome,
    isActiveTab,
  } = useLinkRouting();

  return (
    <>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div
            className={styles.logo}
            onClick={navigateToHome}
            data-testid="header-logo"
          >
            <span className={styles["logo-text"]}>민지의 다이어리</span>
          </div>
        </header>

        {/* Gap */}
        <div className={styles.gap}></div>

        {/* Banner */}
        <section className={styles.banner}>
          <div className={styles["banner-image"]}></div>
        </section>

        {/* Gap */}
        <div className={styles.gap}></div>

        {/* Navigation */}
        <nav className={styles.navigation}>
          <div className={styles["tab-container"]}>
            <div
              className={`${styles.tab} ${
                isActiveTab("diary") ? styles["tab-active"] : ""
              }`}
              onClick={navigateToDiary}
              data-testid="diary-tab"
            >
              <span className={styles["tab-text"]}>일기보관함</span>
            </div>
            <div
              className={`${styles.tab} ${
                isActiveTab("picture") ? styles["tab-active"] : ""
              }`}
              onClick={navigateToPicture}
              data-testid="picture-tab"
            >
              <span className={styles["tab-text"]}>사진보관함</span>
            </div>
          </div>
        </nav>

        {/* Children Content */}
        <main className={styles.children}>{children}</main>
      </div>

      {/* Footer - 컨테이너 밖으로 이동하여 전체 넓이 차지 */}
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <h3 className={styles["footer-title"]}>민지의 다이어리</h3>
          <div className={styles["footer-info"]}>
            <p className={styles["footer-representative"]}>대표 : {"{name}"}</p>
            <p className={styles["footer-copyright"]}>
              Copyright © 2024. {"{name}"} Co., Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
