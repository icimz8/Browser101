//class는 다양한 object를 만들기 위한 청사진이다
class Counter {
  constructor(runEveryFiveTimes)
   {
     this.counter = 0;
     this.callback = runEveryFiveTimes;
   }

   increase() {
     this.counter++;
     console.log(this.counter);
     if(this.counter %5 ===0){
      this.callback && this.callback(this.counter);
     }
   }
}

function printSomehithing(num) {
  console.log(`Hey ${num}`);
} 
const coolCounter = new Counter(printSomehithing); 
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase(); 


//콜백함수를 전달함으로써 원하는 기능을 수행할수있는 자유도가 늘어난다 > 재사용성이 높아짐

// coolCounter.increase(printSomehithing);
// coolCounter.increase(printSomehithing);
// coolCounter.increase(printSomehithing);
// coolCounter.increase(printSomehithing);
// coolCounter.increase(printSomehithing);
// coolCounter.increase(printSomehithing);
// coolCounter.increase(printSomehithing);
// increase (생성한)함수에서 콜백을 받아서 실행할때 일일히전달해야하는 단점 >그래서 보통 constructor에  콜백을 생성


