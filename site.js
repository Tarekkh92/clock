(function () {
    $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
//   console.log(JSON.stringify(data, null, 2));
    // console.log(data.geobytesipaddress);
     x= data.geobytesipaddress;
     //console.log(x);
     return data.geobytesipaddress;
});

})();
    var x;
   var delayInMilliseconds = 500; //1 second

   setTimeout(function() {

            (function () {
                $.ajax({
                url:"https://worldtimeapi.org/api/ip"+x,
                success:function name(res) {
                        //console.log(x);
                   
                    //console.log(res);
                    var str =String(res.datetime);
                    var spl=str.split('T');
                    var d=spl[0];
                    var t=spl[1];
                    var ti= t.split('.');
                    var time =ti[0];

                    
                    //console.log("Date :"+d);
                    //console.log("Time: "+ time);
                    
                     document.getElementById("time").innerHTML+="Date: "+d + " Time: "+time;
                    
                }

            }
            )
            })();
}, delayInMilliseconds);


function getCountry(q){
$.ajax({
    url:"https://restcountries.eu/rest/v2/name/"+q,
    success:function name(res) {
        document.getElementById("output").innerHTML="<h1>"+res[0].name+
        "</h1><br><img   src="+res[0].flag+"  class='responsive' width='500'/><br><p>Region:"+res[0].region+"<br/>Population: "+res[0].population+
        "<br><Currency : "+res[0].currencies[0].name+"<br> Currency code :"+res[0].currencies[0].code +
        "<br>Currency Symbol: "+res[0].currencies[0].symbol+
        "<br>Capital : "+res[0].capital+
        "<br>Language :  "+res[0].languages.map(language => language.name)+
        "<br>Timezones :  "+res[0].timezones+
        "<br>Country Borders :  "+res[0].borders+
        "<br>Calling  Codes :  "+res[0].callingCodes+
        "<br>Alternatice Spelling :  "+res[0].altSpellings+
        "<br> <span id='timeT'> Time : "+getTime (res[0].timezones)+"</span>"+
        //"<br> <span id='timeS'> Time : "+getTime (res[0].timezones)+"</span>"+
        "<br>Top Level Domain : "+res[0].topLevelDomain[0]+"</p>";        
    }

}
)
}
 

function getCapital(q){
$.ajax({
    url:"https://restcountries.eu/rest/v2/capital/"+q,
    success:function name(res) {
        document.getElementById("output").innerHTML="<h1>"+res[0].name+
        "</h1><br><img src="+res[0].flag+"  class='responsive' width='500'/><br><p>Region:"+res[0].region+"<br/>Population: "+res[0].population+
        "<br><Currency : "+res[0].currencies[0].name+"<br> Currency code :"+res[0].currencies[0].code +
        "<br>Currency Symbol: "+res[0].currencies[0].symbol+
        "<br>Capital : "+res[0].capital+
        "<br>Language :  "+res[0].languages.map(language => language.name)+
        "<br>Timezones :  "+res[0].timezones+
        "<br>Country Borders :  "+res[0].borders+
        "<br>Calling  Codes :  "+res[0].callingCodes+
        // "<br> <span id='time'> Time : "+getTime (res[0].timezones)+"</span>"+
        "<br>Top Level Domain : "+res[0].topLevelDomain[0]+"</p>";        
    }

})
}
function getTime(offset){
    var arr=[];
    var times=[];
    if(offset.length > 2){
        for(var i=0;i<offset.length;i++){
        
        // if(offset[i] == 'UTC-10:00'){
        //     arr.push('-10');
        // }
        // if(offset[i] == 'UTC-09:30'){
        //     arr.push('-9.5');
        // }

        // else{
        //     console.log('something else');
        // }
        switch(offset[i]){

            case "UTC-01:00":
                arr.push('-1');
                break;
            case "UTC-02:00":
                arr.push('-2');
                break;
            case "UTC-03:00":
                arr.push('-3');
                break;
            case "UTC-04:00":
                arr.push('-4');
                break;
            case "UTC-05:00":
                arr.push('-5');
                break;
            case "UTC-06:00":
                arr.push('-6');
                break;
            case "UTC-07:00":
                arr.push('-7');
                break;
            case "UTC-08:00":
                arr.push('-10');
                break;
            case "UTC-09:00":
                arr.push('-9');
                break;
            case "UTC-10:00":
                arr.push('-10');
                break;
            case "UTC-11:00":
                arr.push('-11');
                break;
            case "UTC-12:00":
                arr.push('-12');
                break;
            case "UTC-9:30":
                arr.push('-9.5');
                break;
            
           
            case "UTC+01:00":
                arr.push('1');
                break;
            case "UTC+02:00":
                arr.push('2');
                break;
            case "UTC+03:00":
                arr.push('3');
                break;
            case "UTC+04:00":
                arr.push('4');
                break;
            case "UTC+05:00":
                arr.push('5');
                break;
            case "UTC+06:00":
                arr.push('6');
                break;
            case "UTC+07:00":
                arr.push('7');
                break;
                case "UTC+08:00":
                arr.push('8');
                break;
                case "UTC+09:00":
                arr.push('9');
                break;
                case "UTC+10:00":
                arr.push('10');
                break;
                case "UTC+11:00":
                arr.push('11');
                break;

            case "UTC+12:00":
                arr.push('12');
                break;
          
            


            
            default:
            // code block
            console.log('something else ');
        }


    }
    
    for(var i=0;i<arr.length;i++){
       // console.log(arr[i]);
        var y =calcTime(arr[i]);
       // document.getElementById('timeT').innerHTML +=x;
       //console.log(y);
       //times.push('[');
       times.push(y);
       times.push("  '       '    ");
       
    }
    return times;
    }
    //console.log(offset,city);
    
    switch(offset[0]) {
  case "UTC+01:00":
    var x = calcTime('1.0')
    //console.log(x);
    return x;
    break;
  case "UTC+02:00":
    // code block
    
    var x = calcTime('2.0')
    //console.log(x);
    return x;
    break;
case "UTC+03:00":
    // code block
    var x = calcTime('3.0')
    //console.log(x);
    return x;
    break;
case "UTC+03:30":
    // code block
    var x = calcTime('3.5')
    //console.log(x);
    return x;
    break;
case "UTC+04:00":
    // code block
    var x = calcTime('4.0')
    //console.log(x);
    return x;
    break;
case "UTC+04:30":
    // code block
    var x = calcTime('4.5')
    //console.log(x);
    return x;

    break;
case "UTC+05:00":
    // code block
    var x = calcTime('5')
    //console.log(x);
    return x;

    break;
case "UTC+06:00":
    // code block
    var x = calcTime('6')
    //console.log(x);
    return x;

    break;
case "UTC+7:00":
    // code block
    var x = calcTime('7')
    //console.log(x);
    return x;

    break;
case "UTC+08:00":
    // code block
    var x = calcTime('8')
    //console.log(x);
    return x;

    break;
case "UTC+9:00":
    // code block
    var x = calcTime('9')
    //console.log(x);
    return x;

    break;
case "UTC+10:00":
    // code block
    var x = calcTime('10')
    //console.log(x);
    return x;

    break;
case "UTC+11:00":
    // code block
    var x = calcTime('11')
    //console.log(x);
    return x;

    break;
case "UTC+12:00":
    // code block
    var x = calcTime('12')
    //console.log(x);
    return x;

    break;

case "UTC-01:00":
    // code block
    var x = calcTime('-1')
    //console.log(x);
    return x;

    break;
case "UTC-02:00":
    // code block
    var x = calcTime('-2')
    //console.log(x);
    return x;
    break;
    case "UTC-03:00":
    // code block
    var x = calcTime('-3')
    //console.log(x);
    return x;
    break;
    case "UTC-04:00":
    // code block
    var x = calcTime('-4')
    //console.log(x);
    return x;
    break;
    case "UTC-05:00":
    // code block
    var x = calcTime('-5')
    //console.log(x);
    return x;
    break;
    case "UTC-06:00":
    // code block
    var x = calcTime('-6')
    //console.log(x);
    return x;
    break;
    case "UTC-07:00":
    // code block
    var x = calcTime('-7')
    //console.log(x);
    return x;
    break;
    case "UTC-08:00":
    // code block
    var x = calcTime('-8')
    //console.log(x);
    return x;
    break;
    case "UTC-09:00":
    // code block
    var x = calcTime('-9')
    //console.log(x);
    return x;
    break;
    case "UTC-10:00":
    // code block
    var x = calcTime('-10')
    //console.log(x);
    return x;
    break;
    case "UTC-11:00":
    // code block
    var x = calcTime('-11')
    //console.log(x);
    return x;
    break;
    case "UTC-02:00":
    // code block
    var x = calcTime('-12')
    //console.log(x);
    return x;
    break;


  default:
    // code block
    console.log('else');
}






}

function calcTime( offset) {

// create Date object for current location
d = new Date();


// convert to msec
// add local time zone offset
// get UTC time in msec
utc = d.getTime() + (d.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
//console.log(utc + (3600000*offset));
nd = new Date(utc + (3600000*offset));

return ""+ nd.toLocaleString('en-IL');

}
