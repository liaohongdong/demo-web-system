/*
 * @Author: hongdong.liao
 * @Date: 2021-01-07 11:08:11
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 17:31:17
 * @FilePath: /microDemo/demo-web/demo-web-system/src/utils/app-store.js
 */
const OBJ = {}

const appStore = props => {
  props.onGlobalStateChange(value => {
    props.parentStore.dispatch('appstore/setMessage', value.message)
  }, true)
  OBJ.setGlobalState = props.setGlobalState
}

const setState = data => {
  OBJ.setGlobalState({
    ...data
  })
}

export { setState }
export default appStore
