var link = {
    setcolor:function(color){
    var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
      }
  }
  }
  var body = {
    setcolor:function(color){
    document.querySelector('body').style.color = color;
  },
    setbackgroundcolor:function(color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }
  function nightdayhandler(self){
    if(self.value === 'night'){
      body.setbackgroundcolor('black');
      body.setcolor('white');
      self.value= 'day';
      link.setcolor('beige')
    }
      else{
        body.setbackgroundcolor('white');
        body.setcolor('black');
        self.value = 'night';
        link.setcolor('forestgreen')
      }
    }