
num = 10
for (i=0;i<num;i++){
  
  isprime = true
  if (i>2){
    for (j=2;j<i;j++){

      if (i%j == 0){
        isprime = false
      }
    }
  }

  if (i%2==0){
    console.log('EvenNumber ' + i)
  }else if(i%2!=0){
    console.log('Odd Numbers '+ i)
  }

  if (i>1){
    if (isprime){
      console.log('Prime Number ' +i)
    }
  }
 
}