let num = +prompt('Введите любое число:')
  if (!isNaN(num)) {
   if (num%2 == 0) {alert('Число четное!')}
    else {alert('Число нечетное!')
   }
    } else{alert('Упс, кажется, вы ошиблись')
  }