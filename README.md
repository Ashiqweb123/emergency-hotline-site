1)What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans) get element by id means searching the related whick i can manipulate exact id content
      get element by class name means all type of class i gave , i can manipulate acoording to their class name. in that case i have to ensure to get all class by making for loop.
      query selector is selected 1 element only and gave a class name like css class.
      query selector all means selected macthing element all.

2) How do you create and insert a new element into the DOM?
   ans: document.createElement('div')
         div.innerhtml=`
      html content

   `
   parentDiv.append(newdiv)

  3) What is Event Bubbling and how does it work?
     ans: venet bubbling trigegered to child then step by step move on parent . on trigering the child parent will also be triggered.

   4)What is Event Delegation in JavaScript? Why is it useful?
   ans)event deligation is trigering on parent node and step by step move on child , it helps to make code easier and shortly.

   5)What is the difference between preventDefault() and stopPropagation() methods?
   ans: preventDefault() stops the browser refresh and stopPropagation stops the childnode and can not triggered the parent Node.
