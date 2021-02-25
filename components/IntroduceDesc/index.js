/*
 * @Author: your name
 * @Date: 2020-10-25 23:00:36
 * @LastEditTime: 2020-10-30 23:54:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/IntroduceDesc/index.js
 */
import React from 'react';
import styles from './index.module.less';

export default function IntroduceDesc() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introTitle}>masterli</div>
      <p className={styles.introText}>心有多大，舞台就有多大</p>
    </div>
  )
}
