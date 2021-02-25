/*
 * @Author: your name
 * @Date: 2020-10-24 21:55:20
 * @LastEditTime: 2020-10-30 23:55:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/HotPages/index.js
 */
import React, { Component } from 'react';
import styles from './index.module.less';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { message } from 'antd';
// import 'antd/dist/antd.css'; 

class HotPages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstvalue: 'https://blog.csdn.net/weixin_40237505/article/details/114013500',
      secondvalue: 'https://blog.csdn.net/chenzhizhuo/article/details/104159910?ops_request_misc=&request_id=&biz_id=102&utm_term=react%20hooks&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-6-104159910.pc_search_result_before_js',
      thirdvalue: 'https://blog.csdn.net/xgangzai/article/details/108878178?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161424994716780265411764%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161424994716780265411764&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-108878178.pc_search_result_before_js&utm_term=vue+hooks'
    }
  }

  linkjump = (path) => {
    console.log('path', path)
    window.open(path);
  }

  copyLinkHandle = () => {
    console.log('object', 1111)
  }

  onCopyCallBack = () => {
    message.success('链接复制成功',0.6);
  }

  render() {
    return (
      <div className={styles.hotPagesContainer}>
        <h1>热门文章</h1>
        <div className={styles.titleDesc}>
          欢迎阅读、收藏、分享热门文章
          {/* <br/>
          昨夜的那场电影,还有我的心情. */}
        </div>
        <div className={styles.contents}>
          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.firstvalue} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3155886573,2573739945&fm=26&gp=0.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>VSCode初始化项目问题</div>
              <div className={styles.itemDate}>2020-10-27 20:03:52</div>
              <p className={styles.itemDesc}>
				VSCode 用Vue， react 脚手架创建项目踩坑
              </p>
              <div className={styles.readMore} onClick={() => this.linkjump(this.state.firstvalue)}>阅读更多</div>
            </div>
          </div>

          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.secondvalue} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603651196522&di=a16700caf33d74f13f72dc94aeb6bdaf&imgtype=0&src=http%3A%2F%2Fimg.yuntiy.com%2Fillustration%2F1535098791991.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>React hooks</div>
              <div className={styles.itemDate}>2019年12月24日</div>
              <p className={styles.itemDesc}>‘Hooks’ 单词意思为：钩子。React Hooks 意思是：组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码“钩”进来</p>
              <div className={styles.readMore} onClick={() => this.linkjump(this.state.secondvalue)}>阅读更多</div>
            </div>
          </div>


          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.thirdvalue} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389917905,3016311303&fm=26&gp=0.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>Vue3 + TS</div>
              <div className={styles.itemDate}>2020-12-19 15:56:22</div>
              <p className={styles.itemDesc}>TypeScript 是JS的一个超集，主要提供了类型系统和对ES6的支持，使用 TypeScript 可以增加代码的可读性和可维护性，在 react 和 vue 社区中也越来越多人开始使用TypeScript。从最近发布的 Vue3 正式版本来看， Vue3 的源码就是用 TypeScript 编写的，更好的 TypeScript 支持也是这一次升级的亮点。当然，在实际开发中如何正确拥抱 TypeScript 也是迁移至 Vue3 的一个小痛点，这里就针对 Vue3 和 TypeScript 展开一些交流。              </p>
              <div className={styles.readMore} onClick={() => this.linkjump(this.state.thirdvalue)}>阅读更多</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotPages;