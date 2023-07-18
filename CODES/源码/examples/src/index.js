/*
 * @Author: Lee
 * @Date: 2023-06-06 23:04:49
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-14 16:07:51
 * @Description: 
 */
import { initMixin } from './init';

function Vue(options) {
  this._init(options);
}

initMixin(Vue);

export default Vue;
