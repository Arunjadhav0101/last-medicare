<?php
define('DB_HOST', 'localhost');  // XAMPP MySQL host
define('DB_PORT', 3306);
define('DB_USER', 'root');       // XAMPP default user
define('DB_PASS', '');           // XAMPP default password (empty)
define('DB_NAME', 'medicare');

function getDBConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        error_log("DB Connection Failed: " . $conn->connect_error);
        return null;
    }

    $conn->set_charset("utf8mb4");
    return $conn;
}
?>
