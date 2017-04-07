<?php

$isRegistered = false;

$users = "users.txt";

$file = fopen($users, "r");
while (!feof($file) && !$isRegistered) {
  $line = preg_split("/ /", trim(fgets($file)));

  $first = strtolower($_POST['txtFirstName']);
  $last = strtolower($_POST['txtLastName']);
  $email = strtolower($_POST['txtEmail']);

  if ($first == strtolower($line[0]) && $last == strtolower($line[1]) && $email == strtolower($line[2])) {
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
