function count(a, b) {
  let num = a;
  
  let intervalId = setInterval(function() {
    console.log(num);
    if (num == b) {
      clearInterval(intervalId);
    }
    num++;
  }, 1000);
}

count(5, 15);