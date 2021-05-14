/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 14:55:57
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 17:27:03
 * @FilePath: /microDemo/demo-web/demo-web-system/src/main.js
 */
import { loadPublicPath } from '@fe-micro/micro-core'
import { lifeCycle } from './core/life-cycle'

import './core/install'

const { bootstrap, mount, unmount } = lifeCycle()
export { bootstrap, mount, unmount }
loadPublicPath()
