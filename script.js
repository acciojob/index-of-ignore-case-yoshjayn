function indexOfIgnoreCase(s1, s2) {
  // write your code here
	    let lengthToFind = s2.length
        for(let i=0; i<s1.length; i++){
            if(s2.toLowerCase() == s1.toLowerCase().substring(i,i+lengthToFind)) return i || -1
        }
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
