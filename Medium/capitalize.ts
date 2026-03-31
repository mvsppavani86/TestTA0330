
//want to split words 
let str:string = "hello world";
let words: string[] = str.split(" ")// Output: ["hello", "world"]

for(let i = 0; i < words.length; i++)
     {
    //capitalize first letter and concatenate with the rest of the word)
    //words[i]-> "hello" &words[i][0]-> "h""
    //words[i].slice(1) -> "ello"
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
     }
     //words -> ["Hello", "World"]
     //word.join(" ") -> "Hello World"
console.log(words.join(" ")); // Output: "Hello World"