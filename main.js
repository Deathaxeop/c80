student_array=[]
function submit (){
    var display_array=[]
    for(var j=1; j<=4; j++){
        var name=document.getElementById("name_of_the_student_"+j).value
        console.log(name)
        student_array.push(name)    
    }
    console.log(student_array)
    var l=student_array.length
    console.log(l)
    for(var k=0;k<l;k++){
        display_array.push("<h4> name - "+student_array[k]+"</h4>")
        console.log(display_array)
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array
    var rc=display_array.join(" ")
    console.log(rc)
    document.getElementById("display_name_without_commas").innerHTML=rc
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"

}
function sorting(){
    student_array.sort ()
    console.log(student_array)
    var display_array=[]
    var l=student_array.length
    console.log(l)
    for(var k=0;k<l;k++){
        display_array.push("<h4> name - "+student_array[k]+"</h4>")
        console.log(display_array)
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array
    var rc=display_array.join(" ")
    console.log(rc)
    document.getElementById("display_name_without_commas").innerHTML=rc
}