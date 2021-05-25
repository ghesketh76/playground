

function bouncingBall(h,  bounce,  window) {
    if ( h > 0 && 1 > bounce > 0 && h > window){
      let count = 1
      let i
      for (i = h ; i > window ; i * bounce){
        count += 1
      }
      return count
    } else {
      return -1
    }
  }

console.log(bouncingBall(3.0,0.66,1.5))