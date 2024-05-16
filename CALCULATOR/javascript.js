    
        function disp(value){
            let currentInput = document.getElementById("show").value;
            currentInput=currentInput+ value;
            document.getElementById("show").value = currentInput;
        }
        function remove() {
            document.getElementById("show").value = "";
        }
        function ans()
        { 
            let currentInput = document.getElementById("show").value;
            let result = eval(currentInput);
            document.getElementById("show").value = result;
        }