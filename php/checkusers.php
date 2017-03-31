<?php

$isRegistered = false;

$users = "users.txt";

$file = fopen($users, "r");
while (!feof($file) && !$isRegistered) {
  $line = preg_split("/ /", trim(fgets($file)));

  $first = $_POST['txtFirstName'];
  $last = $_POST['txtLastName'];
  $email = $_POST['txtEmail'];

  if ($first == $line[0] && $last == $line[1] && $email == $line[2]) {
    $isRegistered = true;
  }

}

fclose($file);

if ($isRegistered) {
  $goto = "../thanks.html";
} else {
  $goto = "../sorry.html";
}

?>

<script>
  window.location = "<?= $goto ?>";
</script>
