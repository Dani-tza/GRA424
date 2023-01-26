<script>
function swap()
{
   if (document.getElementById("pic").src.endsWith('cm4.jpg') != -1)  //==:Comparison
   { 
      document.getElementById("pic").src = "pic2.png"; //=:assignment   
   } 
   else if (window.document.pic.src.endsWith('pic2.png') != -1) 
   { 
      document.getElementById("pic").src = "cm4.jpg"; 
   }
}
</script>