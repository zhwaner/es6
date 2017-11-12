import $ from 'jquery';

// 接口请求相关的方法
class Interface {
  /*
   * {getOmit 获取遗漏数据}
   * @param {string} issue 当前期号
   * @return {type} description
   * */ 
  // 这里避免回调的两个操作
  getOmit(issue) { // 通过这个方法返回一个Promise对象提供.then方法被外部其他对象使用
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: 'get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function(res) {
          self.setOmit(res.data); // 通过内部调用其他方法返回接口请求的数据，达到数据共享
          resolve.call(self, res);
        },
        error: function(err) {
          reject.call(err);
        }
      })
    })
  }
  /*
   * {getOpenCode 获取开奖号码}
   * @param {string} issue 当前期号
   * @return {type} description
   * */
  getOpenCode(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: 'get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function(res) {
          self.setOpencode(res.data);
          resolve.call(self, res);
        },
        error: function(err) {
          reject.call(err);
        }
      })
    })
  }
  /*
   * {getState 获取当前状态}
   * @param {string} issue 当前期号
   * @return {type} description
   * */
  getState(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: 'get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function(res) {
          resolve.call(self, res);
        },
        error: function(err) {
          reject.call(err);
        }
      })
    })
  }
}

export default Interface