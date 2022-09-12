let outputscreen=document.getElementById('result');



function display(nums)
{
outputscreen.value+=nums;
}

// function myFunction(event) {
//     if (event.key == '0' || event.key == '1' 
//         || event.key == '2' || event.key == '3'
//         || event.key == '4' || event.key == '5' 
//         || event.key == '6' || event.key == '7'
//         || event.key == '8' || event.key == '9' 
//         || event.key == '+' || event.key == '-'
//         || event.key == '*' || event.key == '/')
//         document.getElementById("result").value += event.key;
// }



function clr()
{
outputscreen.value="";
}

function del()
{
    outputscreen.value=outputscreen.value.slice(0,-1);
}

function solve()
{
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(err)
    {
alert('invalid ')
    }

}