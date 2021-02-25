/*
 * @Author: your name
 * @Date: 2020-10-25 23:00:36
 * @LastEditTime: 2020-10-30 23:28:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/IntroduceDesc/index.js
 */
import React from 'react';
import styles from './index.module.less';
import { Button } from 'antd';

export default function HomeFooter() {

  const aboutMeLink = () => {
    window.open("https://blog.csdn.net/weixin_40237505?spm=1001.2014.3001.5343");
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mySelf}>
        <div className={styles.partTitle}>李宇帆</div>
        <p>会当凌绝顶，一览众山小。</p>
        <div className={styles.aboutMeButton} onClick={aboutMeLink}>About Me</div>
      </div>
      <div className={styles.relativedLink}>
        <div className={styles.partTitle}>相关链接</div>
        <div className={styles.linkItems}>
          <i className="iconfont icon-bokeyuan"><span>博文</span></i>
          <i className="iconfont icon-ziyuan"><span>资源</span></i>
          <i className="iconfont icon-guidang"><span>归档</span></i>
          <i className="iconfont icon-liuyan"><span>留言</span></i>
          <i className="iconfont icon-tiaochariji"><span>日记</span></i>
        </div>
      </div>
      <div className={styles.concatMe}>
        <div className={styles.partTitle}>联系我</div>
        <i className="iconfont icon-weizhi"><span>地址：广东省广州市白云区绿地中心18楼</span></i>
        <i className="iconfont icon-QQ"><span>QQ：1732532977</span></i>
        <i className="iconfont icon-icon-email"><span>邮箱：1732532977@qq.com</span></i>
      </div>
    </div>
  )
}
