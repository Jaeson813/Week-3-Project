
        // Allowing the result to be spoken
        var synth = window.speechSynthesis;
        // Making the main function run when the convert button is pressed, and 
        window.addEventListener("load", function(){
            var button = document.getElementById("calc");
            button.addEventListener("click", function(){
                var x = document.getElementById("lit-amount-input").value;
                var textToReadAloud = numberToWords(x);
                document.getElementById("lit-amount-output").textContent = textToReadAloud.toUpperCase();
                var utterThis = new SpeechSynthesisUtterance(textToReadAloud);
                synth.speak(utterThis);
            },false);
        },false);
        
        // Arrays for the function to pull from
        var digitsTeen = ["zero", "one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
        var tens = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
        var ex = ["hundred","thousand"];
        // Function that converts numbers into words
        function numberToWords(x){
            if (x<20){
                return digitsTeen[x];
            }
            else if (x<100){
                var tensPlace = Math.floor(x/10);
                var onesPlace = x-tensPlace*10;
                if (x % 10 == 0){
                    return tens[tensPlace-2];
                }
                else{
                    return tens[tensPlace-2]+"-"+digitsTeen[onesPlace];
                }
            }
            else if(x<1000){
                var hundredsPlace = Math.floor(x/100);
                var remainder = x-hundredsPlace*100;
                if (x % 100 == 0){
                    return digitsTeen[hundredsPlace]+ex[0];
                }
                else{
                    return digitsTeen[hundredsPlace]+ex[0]+numberToWords(remainder);
                }
            }
            else if(x<1000000000){
                var thousandsPlace = Math.floor(x/1000);
                var remainder = x-thousandsPlace*1000;
                if (x % 1000 == 0){
                    return numberToWords(thousandsPlace)+ex[1];
                }
                else{
                    return numberToWords(thousandsPlace)+ex[1]+numberToWords(remainder);
                }
            }
            
        }   