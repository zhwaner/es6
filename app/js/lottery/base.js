import $ from 'jquery'
class Base {
  /*
   * {initPlayList 初始化奖金和玩法及注数}
   * @return {type} {description}
   * */
  initPlayList () {
    this.play_list.set('r2', {
      bonus: 6,
      tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">6</em>元',
      name: '任二'
    })
    .set('r3', {
      bonus: 19,
      tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">19</em>元',
      name: '任三'
    })
    .set('r4', {
      bonus: 78,
      tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">78</em>元',
      name: '任四'
    })
    .set('r5', {
      bonus: 540,
      tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
      name: '任五'
    })
    .set('r6', {
      bonus: 90,
      tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">90</em>元',
      name: '任六'
    })
    .set('r7', {
      bonus: 26,
      tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">26</em>元',
      name: '任七'
    })
    .set('r8', {
      bonus: 9,
      tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">9</em>元',
      name: '任八'
    })
  }

  /*
   * {initNumber 初始化号码}
   * @return {type} {description}
   * */
  initNumber () {
    for (let i = 0; i < 12; i++) {
      this.number.add(('' + i).padStart(2, '0')) // 1-9前面添加0
    }
  }

  /*
   * {setOmit 设置遗漏数据:十分钟更新一次}
   * @return {type} omit {description}
   * */
  setOmit () {
    let self = this
    self.omit.clear()
    for (let [index, item] of omit.entries()) {
      self.omit.set(index, item)
    }
    $(self.omit_el).each(function (index, item) {
      $(item).text(self.omit.get(index))
    })
  }

  /*
   * {setOpenCode 设置开奖}
   * @return {type} code {description}
   * */
  setOpenCode (code) {
    let self = this
    self.open_code.clear()
    // Map和Set数据结构的不同，替代数组的优势
    for (let item of code.values()) {
      self.open_code.add(item)
    }
    self.updateOpenCode && self.updateOpenCode.call(self, code)
  }

  /*
   * {toggleCodeActive 号码选中取消}
   * @param {type} e {description}
   * @return {type}  {description}
   * */
  toggleCodeActive (e) {
    let self = this
    let $cur = $(e.currentTarget)
    $cur.toggleClass('btn-boll-active')
    self.getCount()
  }
}
