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

  }
}
