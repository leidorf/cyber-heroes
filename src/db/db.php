<?php
try {
    $pdo = new PDO('sqlite:' . __DIR__ . '/../db/cyber-heroes.db');

    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (\Throwable $th) {
    echo "Error: " . $th;
}
