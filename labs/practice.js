let costOfMilk = 2;
if (costOfMilk < 2) {
    console.log('we will buy 2 gallons');
    } else if (costOfMilk < 3) {
        console.log('we will buy only 1 gallon');
        
    } else {
        console.log('no thanks, way too expensive!');
    }

    let grade = 'C';

    switch (grade) {
        case 'A':
            console.log(90-100);
            break;
        case 'B':
            console.log('80-89');
            break;
        case 'C':
            console.log('70-79');
            break;
        default:
            console.log('0-69');
            
            

            
     }

     let x = 5;
     let b = 6;

     if (x == 5) {
        if (b == 6) {
            console.log('x is 5 and be is 6.');
            
        } else {
            console.log('x is 5 but b is not 6');
            
        }
     }

     if (x ==5 && b == 6) {
        console.log('x is 5 and be is 6.');
        
     }
/* for loops*/
 for (let i = 0; i <= 10; i++) {
    console.log(i);
    
 }  
 console.log('whatever is next');

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);     
    }
} 

let names = ['kyle','gabby','khayman'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}

let a = 0

/* while loops*/

while (a <= 10) {
    console.log(a);
    a++;
    
}

do {
    console.log(a);
    
} while (a < 10)

    for (i in names) {
        console.log(names[i]);
        
    }

    for (name of names) {
        console.log(name);
        
    }

    
   