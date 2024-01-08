<?php
// Połączenie z bazą danych
$link = mysqli_connect("mysql.agh.edu.pl", "wjanick2", "QDfib6BFYddknHh2", "wjanick2");

if (!$link) {
    die('Could not connect: ' . mysqli_error());
}

// Zapytanie do bazy danych
$query = "SELECT * FROM office";
$result = mysqli_query($link, $query);

// Przetwarzanie wyników
$locations = [];
while ($row = mysqli_fetch_assoc($result)) {
    $locations[] = $row;
}

// Zamknięcie połączenia z bazą danych
mysqli_close($link);

// Zwrócenie danych jako JSON
header('Content-Type: application/json');
echo json_encode($locations);
?>
