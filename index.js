
let s=prompt("enter the speed")
checksped(s);
 function checksped(s){

if (s<=70)
{
    document.write("ok");
} 
else if(s>70)

{

let points=(s-70)/5;
document.write( "you got  ", points);

  if(points>=12){
    document.write("your license suspended");

}
}}