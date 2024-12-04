<?php
$env = parse_ini_file(__DIR__ . '/../../.env');

$dbname = $env['MYSQL_DATABASE'];
$user = $env['MYSQL_USER'];
$password = $env['MYSQL_PASSWORD'];

try {
    $pdo = new PDO("mysql:host=db;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
