# hw4
Consider this program. In the README.md file on your repository, answer the following questions:
1. How many lines are drawn each frame? In other words, how often does the for loop run?
---> 38 lines

2. What do the first, second, and third appearances of the number 10 do in the code?
---> The first one is the starting point of the line.
     The second one is the ending point of the repeating line.
     The last one refers to the gap between lines. 
     
---------------------
Answer the following questions in your README.md file:
1. How many times does the loop body run each frame, once the x and y arrays are full?
--->50 times

2. What are two ways of increasing the spacing between rings?
The first way is : “for (var i = 0; i < x.length; i = i + 10)” change this code as “for (var i = 0; i < x.length; i = i + 20)” 
The other way is to multiply a number after dimension like this : ellipse(x[i], y[i], 1 + (x.length - i)*4);

3. How can you make the ellipse trail longer?
Change the code, “x = x.slice(-50); y = y.slice(-50);” to this:
x = x.slice(-150); 
y = y.slice(-150);
, which means make the number bigger than "-50 "  Then, the trail will become longer. 

