<?php
$servername = "localhost";
$username = "root";
$password = "Sql1150*";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$firstname =$_POST["name"]
$email =$_POST["email"]
$phoneNum =$_POST["phoneNum"]
$salary =$_POST["salary"]
$education =$_POST["education"]
$gender =$_POST["gender"]
$age =$_POST["age"]

if(isset($_POST['buttonsubmit'])) {
  echo "This is Button2 that is selected";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="ex6styles.css">
</head>


<body>
  <form class="form-controll" action="exercise_6.php" medthid="POST" >
    <div>
    <label for="name" >ชื่อ นามสกุล  </label> <input id="name"></input>
    <label for="email" type="email">อีเมล  </label> <input id="email"></input>
    <label for="phoneNum" type="number" >เบอร์โทร  </label> <input id="phoneNum"></input>
    <label for="salary" type="number">เงินเดือน  </label>
    <select name="salary" id="salary">
      <option value="0-15000">0 - 15,000 บาท</option>
      <option value="15001-30000">15,001 - 30,000 บาท</option>
      <option value="30000">30,000 บาท ขึ้นไป</option>
    </select>
    <label for="education" >การศึกษา  </label>
    <select name="education" id="education">
      <option value="bachelor"> ป. ตรี</option>
      <option value="master"> ป. โท</option>
      <option value="doctor">  ป. เอก</option>
    </select>
    <label for="gender" >เพศ  </label> 
    <div class="genderinput">
      <input type="radio" name="gender" value="male">ชาย</input> <input type="radio" name="gender" value="c">หญิง</input>
    </div>
    <label for="age" >อายุ  </label> <input id="age"  type="number"></input>
    
    <div class="butSubmit">
       <button        type=" submit"  name="buttonsubmit"
                value="buttonsubmit" >บันทึก</button>
      </div>

  </div>
  </form>
  


<?php 

?>
</body>
</html>