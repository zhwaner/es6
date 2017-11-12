// end结束时间，update时间更新的回调，handle倒计时结束的回调
class Timer {
	countdown(end, update, handle) {
    const now = new Date().getTime(); // const只读
    const self = this;
    if (now - end) { // 结束
      handle.call(self) // 将handle函数中this的指向为self
    } else {
      let last_time = end - now;
      const px_d = 1000 * 60 * 60 * 24;
      const px_h = 1000 * 60 * 60;
      const px_m = 1000 * 60;
      const px_s = 1000;
      let d = Math.floor(last_time / px_d);
      let h = Math.floor((last_time - d * px_d) / px_h);
      let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
      let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
      let r = [];
      if (d > 0) {
        r.push(`<em>${d}</em>天`);
      }
      if (r.length || h > 0) { // 考虑h=0而d>0的情况，要加上或判断条件
        r.push(`<em>${h}</em>时`);
      }
      if (r.length || m > 0) {
        r.push(`<em>${m}</em>分`);
      }
      if (r.length || s > 0) {
        r.push(`<em>${s}</em>秒`);
      }
      self.last_time = r.join('');
      update.call(self, r.join(''));
      setTimeout(() => {
        self.countdown(end, update, handle);
      }, 1000);
    }
	}
}

export default Timer