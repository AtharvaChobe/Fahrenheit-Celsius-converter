function convertTemp(){
    const InputTemp = document.getElementById('temp').value;
    // console.log(InputTemp);

    const a = document.getElementById('select_temp');
    const unitSelected = select_temp.options[a.selectedIndex].value;

    // console.log(unitSelected);


    function celTofah(x){
        let fah = ((x * 9/5) + 32);
        return fah;
    }
    function fahTocel(y){
        let cel = (y - 32)* 5/9;
        return cel;
    }

     let result;

     if(unitSelected == 'cel'){
        result = fahTocel(InputTemp);
        document.getElementById('output').innerHTML = `${result} Celcius`;
     }
     else{
        result = celTofah(InputTemp);
        document.getElementById('output').innerHTML = `${result} Fahrenheit`;
     }
} 